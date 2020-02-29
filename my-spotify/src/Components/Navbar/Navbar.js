import React from 'react';
import { NavLink } from 'react-router-dom';
import './../../css/Navbar.css';

const Navbar = () => {
    return (
        <nav id="nav">
            <NavLink exact to={"/"}>Home</NavLink>
            <NavLink to={"/collection"}>Library</NavLink>
        </nav>    
    )
} // End of Navbar Component

export default Navbar;