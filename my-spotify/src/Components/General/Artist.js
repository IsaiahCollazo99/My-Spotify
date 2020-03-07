import React from 'react';
import { Link } from 'react-router-dom';

const Artist = ({name, img, tag, id}) => {
    return (
        <Link to={`/artist/${id}`} className="displayAnchor">
            <div className="artist">
                <img src={img} alt="artist" className="artistImg"/>
                <p className="artistName">{name.length <= 17 ? name : name.slice(0, 17) + "..."}</p>
                <p className="artistTag">{tag[0].toUpperCase() + tag.slice(1)}</p>
            </div>
        </Link>
    )
}

export default Artist;