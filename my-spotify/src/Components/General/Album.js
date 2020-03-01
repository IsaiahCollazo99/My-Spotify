import React from 'react';

const Album = ({img, name, artist}) => {
    return (
        <div className="libraryAlbum">
            <img src={img} alt="album" className="albumImg"/>
            <p className="albumName">{name}</p>
            <p className="albumArtist">{artist}</p> 
        </div>
    )
}

export default Album;