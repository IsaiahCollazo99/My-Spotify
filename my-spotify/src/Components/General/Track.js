import React from 'react';

const Track = (props) => {
    if(props.type === "library") {
        return (
            <div className="libraryTrack">
                <img src={props.img} alt="album" style={props.width ? {width: props.width} : {width: 100}} />
                <p>{props.name} By. {props.artist}</p>
            </div>
        )
    }
    return (
        <div className="track">
            <img src={props.img} alt="album" style={props.width ? {width: props.width} : {width: 100}} />
            <p className="songTitle">{props.name}</p>
            <p className="songArtist">{props.artist}</p>
        </div>
    )
} // End of Track Component

export default Track;