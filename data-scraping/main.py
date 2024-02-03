import requests
import pandas as pd
from bs4 import BeautifulSoup

URL = "https://fbref.com/en/comps/9/Premier-League-Stats"   # link for stats
headers = {
    "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"
}
res = requests.get(URL, headers=headers)
soup = BeautifulSoup(res.text, 'html.parser')
table = soup.find_all('table')[0]
links = table.find_all('a')
links = [l.get('href') for l in links]
links = [l for l in links if 'en/squads' in l]  # links with en/squads contains stats for each player in the team
links = ["https://fbref.com" + l for l in links] # create the url for each team
all_players = []

for link in links:
    res = requests.get(link)
    soup = BeautifulSoup(res.text, 'lxml')
    team_name = link.split("/")[-1].replace("-Stats", "")
    table = soup.find_all('table')
    if table:
        stats_df = pd.read_html(str(table[0]), encoding='utf-8')[0]
        stats_df.columns = stats_df.columns.droplevel()
        selected_columns = ['Player', 'Nation', 'Pos', 'Age', 'MP', 'Starts', 'Min', '90s', 'Gls', 'Ast', 'PK', 'CrdY', 'CrdR']
        stats_df = stats_df.loc[:, selected_columns]
        stats_df = stats_df.loc[:, ~stats_df.columns.duplicated()]
        stats_df['Team'] = team_name
        stats_df = stats_df.fillna("")
        stats_df['Age'] = stats_df['Age'].str.split("-").str.get(0)
        all_players.append(stats_df)

all_players_df = pd.concat(all_players, ignore_index=True)
all_players_df.to_csv(r"C:\Users\hasan\Downloads\pldata.csv", encoding='utf-8-sig')
    