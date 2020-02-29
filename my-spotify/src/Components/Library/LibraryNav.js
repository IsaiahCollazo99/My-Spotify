import React from 'react';
import { NavLink } from 'react-router-dom';
import './../../css/LibraryNav.css';

const LibraryNav = (props) => {
    return (
        <nav id="libraryNav">
            <NavLink exact to={"/collection/playlists"}>PLAYLISTS</NavLink>
            <NavLink exact to={"/collection/artists"}>ARTISTS</NavLink>
            <NavLink exact to={"/collection/albums"}>ALBUMS</NavLink>
        </nav>
    )
}

export default LibraryNav;