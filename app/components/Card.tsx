"use client";
import { usePathname } from 'next/navigation'
import React from 'react';
import ReactCountryFlag from "react-country-flag";
import { CardProps } from '../types/interfaces';
import { useRouter } from 'next/navigation';


const Card: React.FC<CardProps> = ({ name, image, code }) => {
  const router = useRouter();
  const currPath = usePathname();
  const isCountriesPage = currPath.includes('/countries');
  const isTeamsPage = currPath.includes('/teams');

  const handleClick = () => {
    if (isTeamsPage) {
      router.push(`/stats?team=${code}`);
    }
    else if(isCountriesPage) {
      router.push(`/stats?nation=${code}`);
    }
    else {
      router.push(`/stats?pos=${code}`);
    }
  }

  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl p-5">
        <figure className='h-48'>
          {isCountriesPage ? <ReactCountryFlag countryCode={image} svg style={{ width: "90%", height: "90%" }}/> : <img src={image} alt={name} className='h-48 w-42' /> }
        </figure>
        <div className="card-body">
            <h2 className="text-center text-xl font-bold">{name}</h2>
            <div className="card-actions justify-center mt-2">
            <button onClick={handleClick} className="btn btn-secondary btn-outline">View Players</button>
            </div>
        </div>
    </div>
  )
}

export default Card
