import React from 'react';

const CollectionTracks = ({img, name}) => {
    return (
        <a href={`http://localhost:3000/tracks`} className="playlistAnchor">
        <div className="libraryPlaylist">
            <img src={img} alt="playlist" className="playlistImg" />
            <p className="playlistName">{name.length <= 17 ? name : name.slice(0, 17) + "..."}</p>
        </div>
    </a>
    )
}

export default CollectionTracks;