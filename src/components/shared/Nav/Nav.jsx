import React from 'react';
import { NavLink } from 'react-router';
import logo from '/logo.png';
const Nav = () => {

    // no need to create a component for this store in variable
    const NavLinks = (
        <>
            <li><NavLink className={({ isActive }) => `font-semibold mr-2 ${isActive ? 'text-green-500 border border-green-500' : ''}`} to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => `font-semibold mr-2 ${isActive ? 'text-green-500 border border-green-500' : ''}`} to='/books'>Listed Books</NavLink></li>
            <li><NavLink className={({ isActive }) => `font-semibold mr-2 ${isActive ? 'text-green-500 border border-green-500' : ''}`} to='/graph-of-books'>Graph of Books</NavLink></li>

        </>)

    return (
        <nav className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {NavLinks}
                        </ul>
                    </div>
                    <div className='logo flex items-center gap-1.5'>
                        <img src={logo} alt="" width='25px' />
                        <a className="playfair-font font-bold text-2xl"> Book Vibe</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <button className="btn  btn-success text-white">Signin</button>
                    <button className="btn btn-info text-white">Signup</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;