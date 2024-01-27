import React from 'react';

interface CardProps {
    teamName: string,
    imageUrl: string
}

const Card: React.FC<CardProps> = ({ teamName, imageUrl }) => {
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl p-5">
        <figure className='h-48'><img src={imageUrl} alt={teamName} className='h-48 w-42' /></figure>
        <div className="card-body">
            <h2 className="text-center text-xl font-bold">{teamName}</h2>
            <div className="card-actions justify-center mt-2">
            <button className="btn btn-secondary btn-outline">View Players</button>
            </div>
        </div>
    </div>
  )
}

export default Card
