import React from 'react';
import './../../css/Track.css';

const Track = (props) => {
    return (
        <div className="track">
            <p>{props.name} By. {props.artist}</p>
            <img src={props.img} alt="album" style={{width: 100}} />
        </div>
    )
} // End of Track Component

export default Track;