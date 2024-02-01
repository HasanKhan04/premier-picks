import React from 'react'
import Card from './Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CardGridProps } from '../types/interfaces';


const CardGrid: React.FC<CardGridProps> = ({ data } ) => {

    return (
        <Box sx={{ width: '100%', padding: '55px' }}>
            <Grid className='gap-4' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {data.map((d) => (
                    <Grid item key={d.name} xs={'auto'} sm={'auto'} md={'auto'} lg={'auto'}>
                        <Card name={d.name} image={d.image} code={d.code}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
      )
}

export default CardGrid
