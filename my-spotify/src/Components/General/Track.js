import React from 'react';

/**
 * @typedef {object} props
 * @property {string} name - Track title
 * @property {string} artist - Track artist
 */

 /**
  * 
  * @param {props} props 
  */
const Track = ({name, img, artist, width, type}) => {
    if(type === "library") {
        return (
            <div className="libraryTrack">
                <img src={img} alt="album" style={width ? {width: width} : {width: 100}} />
                <p>{name} By. {artist}</p>
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