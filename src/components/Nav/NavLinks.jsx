import React from 'react';
import { NavLink } from 'react-router';

const NavLinks = () => {
    return (
        <>
            <li><NavLink className={({ isActive }) => `font-semibold mr-2 ${isActive ? 'text-green-500 border border-green-500' : ''}`} to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => `font-semibold mr-2 ${isActive ? 'text-green-500 border border-green-500' : ''}`} to='/books'>Listed Books</NavLink></li>
            <li><NavLink className={({ isActive }) => `font-semibold mr-2 ${isActive ? 'text-green-500 border border-green-500' : ''}`} to='/page-to-read'>Pages to Read</NavLink></li>

        </>
    );
};

export default NavLinks;