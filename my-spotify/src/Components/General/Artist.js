import React from 'react';

const Artist = ({name, img}) => {
    return (
        <div className="artist">
            <img src={img} alt="artist" style={{width: 100}} className="artistImg"/>
            <p className="artistName">{name}</p>
        </div>
    )
}

export default Artist;