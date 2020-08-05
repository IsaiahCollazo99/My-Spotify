import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './../../css/Navbar.css';

const Navbar = ({ spotifyWebApi }) => {
    const [playlists, setPlaylists] = useState([]);

    const getPlaylists = async () => {
        const res = await spotifyWebApi.getUserPlaylists();
        res.items ? setPlaylists(res.items) : setPlaylists([]);
    }

    useEffect(() => {
        getPlaylists()
    }, [])

    const playlistList = playlists.map(playlist => {
        const { name, id: playlistId } = playlist;
        let displayName = "";
        if(name.length > 13) {
            if(name[13] === " ") {
                displayName = name.slice(0, 13) + "..."
            } else {
                displayName = name.slice(0, 14) + "..."
            }
        } else {
            displayName = name;
        }

        return (
            <NavLink to={`/playlist/${playlistId}`} key={playlistId}>{displayName}</NavLink>
        )
    })
    
    return (
        <nav id="nav">
            <NavLink exact to={"/"}>HOME</NavLink>
            <NavLink to={"/collection"}>LIBRARY</NavLink>

            <h5>Playlists</h5>
            <hr />

            <div className="navPlaylists">
                <NavLink to={"/tracks"}>Liked Songs</NavLink>
                {playlistList}
            </div>
        </nav>    
    )
} // End of Navbar Component

export default Navbar;