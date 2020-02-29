import React from 'react';
import { NavLink } from 'react-router-dom';
import './../../css/LibraryNav.css';

const LibraryNav = (props) => {
    return (
        <nav id="libraryNav">
            <NavLink exact to={"/collection/playlists"}>Playlists</NavLink>
            <NavLink exact to={"/"}>Home</NavLink>
        </nav>
    )
}

export default LibraryNav;