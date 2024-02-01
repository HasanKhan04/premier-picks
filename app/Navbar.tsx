"use client";
import React from 'react';
import { SiPremierleague } from "react-icons/si";
import { MdGroups } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { GiSoccerKick } from "react-icons/gi";


const Navbar = () => {
  return (
    <div className="navbar" style={{ backgroundColor: '#2D0C3D' }}>
        <div className="navbar-start" style={{ width: '30%' }}>
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                <li><a href='/teams'>Teams</a></li>
                <li><a href='/nations'>Nations</a></li>
                <li><a href='/positions'>Positions</a></li>
            </ul>
            </div>
            <a className="btn btn-ghost text-xl" href='/'><SiPremierleague size={40}/></a>
        </div>
        <div className="navbar-center hidden lg:flex flex-1" style={{ width: '40%', display: "flex" }}>
            <ul className="menu menu-horizontal px-1 justify-between" style={{ width: '100%' }}>
            <li><a href='/teams'><MdGroups size={40}/></a></li>
            <li><a href='/countries'><FaEarthAmericas size={30}/></a></li>
            <li><a href='/positions'><GiSoccerKick size={40}/></a></li>
            </ul>
        </div>
        <div className="navbar-end" style={{ width: '30%' }}>
            <div className="form-control">
                <input type="text" placeholder="Search Players" className="input input-bordered w-24 md:w-auto mr-6" />
            </div>
        </div>
    </div>
  )
}

export default Navbar
