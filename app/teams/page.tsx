"use client";
import React, { useState } from 'react';
import "../globals.css";
import CardGrid from '../components/CardGrid';
import teamData from "../../public/data/teams.json";

const Teams = () => {
  
  const allTeams = teamData['teams'];
  const [teams, setTeams] = useState(allTeams);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const searchedTeams = allTeams.filter(team => team.name.toLowerCase().includes(searchTerm));
    setTeams(searchedTeams);  
  }

  return (
    <main className='relative min-h-screen'>
        <h1 className="z-10 pl-14 pt-10 pb-6 text-white font-black text-6xl uppercase">
            Teams
        </h1>
        <input onChange={handleSearch} type="text" placeholder="Search Teams" className="input input-bordered input-secondary w-full max-w-xs ml-14" />
        <CardGrid data={teams}/>
    </main>
  )
}

export default Teams
