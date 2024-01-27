import React from 'react'
import teamData from "../../public/data/teams.json";
import Card from './Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const CardGrid = () => {

    const allTeams = teamData["teams"];
    return (
        <Box sx={{ width: '100%', padding: '55px' }}>
            <Grid className='gap-4' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {allTeams.map((team) => (
                    <Grid item key={team.team} xs={'auto'} sm={'auto'} md={'auto'} lg={'auto'}>
                    <Card teamName={team.team} imageUrl={team.image} />
                    </Grid>
                ))}
            </Grid>
        </Box>
      )
}

export default CardGrid
