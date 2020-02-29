import React from 'react';
import './../../css/Artist.css';

const Artist = ({name, img}) => {
    return (
        <div className="artist">
            <p>{name}</p>
            <img src={img} alt="artist" style={{width: 100}} />
        </div>
    )
}

export default Artist;