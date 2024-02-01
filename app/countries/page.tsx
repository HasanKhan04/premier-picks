"use client";
import React, { useState } from 'react';
import "../globals.css";
import CardGrid from '../components/CardGrid';
import countriesData from "../../public/data/countries.json";

const Countries = () => {
    const allCountries = countriesData['countries'];
    const [countries, setCountries] = useState(allCountries);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value.toLowerCase();
        const searchedCountries = allCountries.filter(country => country.name.toLowerCase().includes(searchTerm));
        setCountries(searchedCountries);  
      }

    return (
        <main className='relative min-h-screen'>
            <h1 className="z-10 pl-14 pt-10 pb-6 text-white font-black text-6xl uppercase">
                Countries
            </h1>
            <input onChange={handleSearch} type="text" placeholder="Search Countries" className="input input-bordered input-secondary w-full max-w-xs ml-14" />
            <CardGrid data={countries}/>
        </main>
    )
}

export default Countries
