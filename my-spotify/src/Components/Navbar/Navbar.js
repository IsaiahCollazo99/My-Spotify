import React from 'react';
import { NavLink } from 'react-router-dom';
import './../../css/Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <NavLink exact to={"/"}>Home</NavLink>
            <NavLink exact to={"/library"}>Library</NavLink>
        </nav>    
    )
} // End of Navbar Component

export default Navbar;