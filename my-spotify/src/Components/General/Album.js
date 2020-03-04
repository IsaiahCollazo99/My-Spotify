import React from 'react';

const Album = ({img, name, artist, id}) => {
    return (
        <a href={`http://localhost:3000/album/${id}`} className="displayAnchor">
            <div className="libraryAlbum">
                <img src={img} alt="album" className="albumImg"/>
                <p className="albumName">{name.length <= 16 ? name : name.slice(0, 16) + "..."}</p>
                <p className="albumArtist">{artist}</p> 
            </div>
        </a>
        
    )
}

export default Album;