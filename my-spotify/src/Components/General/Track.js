import React from 'react';

const msToMinutesAndSeconds = (ms) => {
    let minutes = Math.floor(ms / 60000);
    let seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

/**
 * @typedef {object} props
 * @property {string} name - Track title
 * @property {string} artist - Track artist
 */

 /**
  * 
  * @param {props} props 
  */
const Track = ({name, img, artist, width, type, runTime}) => {
    if(type === "library") {
        return (
            <div className="libraryTrack">
                <img src={img} alt="album" style={width ? {width: width} : {width: 100}} />
                <p>{name} By. {artist}</p>
            </div>
        )
    } else if(type === "displayComponents") {
        let time = msToMinutesAndSeconds(runTime);
        return (
            <div className="displayTrack">
                <div className="displayLeft">
                    <p className="songTitle">{name}</p>
                    <p className="songArtist">{artist}</p>
                </div>
                <div className="displayRight">
                    <p>{time}</p>
                </div>
            </div>
        )
    }
    return (
        <div className="track">
            <img src={img} alt="album" style={width ? {width: width} : {width: 100}} />
            <p className="songTitle">{name.length <= 15 ? name : name.slice(0, 16) + "..."}</p>
            <p className="songArtist">{artist.length <= 15 ? artist : artist.slice(0, 16) + "..."}</p>
        </div>
    )
} // End of Track Component

export default Track;