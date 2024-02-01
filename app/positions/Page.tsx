"use client";
import React, { useState } from 'react';
import "../globals.css";
import CardGrid from '../components/CardGrid';
import positionsData from "../../public/data/positions.json";

const Positions = () => {
    const allPositions = positionsData['positions'];
    const [positions, setPositions] = useState(allPositions);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value.toLowerCase();
        const searchedPositions = allPositions.filter(position => position.name.toLowerCase().includes(searchTerm));
        setPositions(searchedPositions);  
      }

    return (
        <main className={`relative min-h-screen`}>
            <h1 className="z-10 pl-14 pt-10 pb-6 text-white font-black text-6xl uppercase">
                Positions
            </h1>
            <input onChange={handleSearch} type="text" placeholder="Search Positions" className="input input-bordered input-secondary w-full max-w-xs ml-14" />
            <CardGrid data={positions}/>
        </main>
    )
}

export default Positions
