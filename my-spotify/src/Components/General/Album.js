import React from 'react';
import { Link } from 'react-router-dom';

const Album = ({img, name, artist, id}) => {
    return (
        <Link to={`/album/${id}`} className="displayAnchor">
            <div className="libraryAlbum">
                <img src={img} alt="album" className="albumImg"/>
                <p className="albumName">{name.length <= 16 ? name : name.slice(0, 16) + "..."}</p>
                <p className="albumArtist">{artist}</p> 
            </div>
        </Link>
        
    )
}

export default Album;