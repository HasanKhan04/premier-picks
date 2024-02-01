import axios from 'axios';
import { RequestProps } from '../types/interfaces';

const API_URL = 'http://localhost:8080/api/v1/players';

export async function getPlayers ({team = null, pos = null, nation = null, name = null}: RequestProps) {
    try {
        const queryParams = {
            team: team,
            pos: pos,
            nation: nation,
            name: name,
          };
          const response = await axios.get(API_URL, { params: queryParams });
          return response.data;
        
    } catch (error) {
        console.log(error);
    }
}