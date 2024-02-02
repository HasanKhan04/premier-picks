"use client";
import React, { Suspense, useEffect, useState } from 'react';
import "../globals.css";
import { useSearchParams } from 'next/navigation';
import { getPlayers } from '../api';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { Player } from '../types/interfaces';


const Stats = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const searchParams = useSearchParams();

    useEffect(() => {
        const fetchData = async () => {
            const team = searchParams.get('team');
            const pos = searchParams.get('pos');
            const nation = searchParams.get('nation');
            const name = searchParams.get('name');        
            const data = await getPlayers({team, pos, nation, name}); 
            setPlayers(data);

        };
        fetchData();
    }, [searchParams]);

    interface Column {
        id: keyof Player;
        label: string;
        minWidth?: number;
        align?: 'right';
      }
      
      const columns: readonly Column[] = [
        { id: 'name', label: 'Name' },
        { id: 'nation', label: 'Nation'},
        { id: 'pos', label: 'Position'},
        { id: 'age', label: 'Age' },
        { id: 'mp', label: 'Matches Played' },
        { id: 'starts', label: 'Starts' },
        { id: 'mins', label: 'Minutes Played' },
        { id: 'goals', label: 'Goals' },
        { id: 'assists', label: 'Assists' },
        { id: 'pk', label: 'Penalty Kicks' },
        { id: 'yellows', label: 'Yellow Cards' },
        { id: 'reds', label: 'Red Cards' },
        { id: 'team', label: 'Team' },
      ];

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: "#1D232A",
          color: "#A6ADBB",
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.common.white
        },
        '&nth-of-type(even)': {
            backgroundColor: theme.palette.grey
        },
      }));

      console.log(players)

    return (
        <Suspense fallback={<div>Loading...</div>}>
        <main className='relative min-h-screen'>
            <h1 className="z-10 pl-14 pt-10 pb-6 text-white font-black text-6xl uppercase">
                Player Data
            </h1>
            <TableContainer sx={{ maxHeight: "600px", backgroundColor: "white", maxWidth: "95%", marginLeft: 5 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <StyledTableRow>
                        {columns.map((column) => (
                            <StyledTableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </StyledTableCell>
                        ))}
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {players
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((player) => {
                            return (
                            <StyledTableRow hover role="checkbox" tabIndex={-1} key={player.name}>
                                {columns.map((column) => {
                                const value = player[column.id];
                                return (
                                    <StyledTableCell key={column.id} align={column.align}>
                                    {value != undefined ? value : 0}
                                    </StyledTableCell>
                                );
                                })}
                            </StyledTableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={players.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </TableContainer>
        </main>
        </Suspense>
    )
}

export default Stats
