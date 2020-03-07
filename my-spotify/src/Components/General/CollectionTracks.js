import React from 'react';
import { Link } from 'react-router-dom';

const CollectionTracks = ({img, name}) => {
    return (
        <Link to={`/tracks`} className="displayAnchor">
        <div className="libraryPlaylist">
            <img src={img} alt="playlist" className="playlistImg" />
            <p className="playlistName">{name.length <= 17 ? name : name.slice(0, 17) + "..."}</p>
        </div>
    </Link>
    )
}

export default CollectionTracks;