import React from 'react';
import "../globals.css";
import CardGrid from '../components/CardGrid';

const Teams = () => {
  return (
    <main className='relative'>
        <h1 className="z-10 pl-14 pt-10 pb-6 text-white font-black text-6xl uppercase">
            Teams
        </h1>
        <input type="text" placeholder="Search Teams" className="input input-bordered input-secondary w-full max-w-xs ml-14" />
        <CardGrid />
    </main>
  )
}

export default Teams
