import React from 'react';

const Artist = ({name, img, tag, id}) => {
    return (
        <a href={`http://localhost:3000/artist/${id}`} className="displayAnchor">
            <div className="artist">
                <img src={img} alt="artist" className="artistImg"/>
                <p className="artistName">{name.length <= 17 ? name : name.slice(0, 17) + "..."}</p>
                <p className="artistTag">{tag[0].toUpperCase() + tag.slice(1)}</p>
            </div>
        </a>
    )
}

export default Artist;