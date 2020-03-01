import React from 'react';

const msToMinutesAndSeconds = (ms) => {
    let minutes = Math.floor(ms / 60000);
    let seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const Track = ({runTime, name, artist}) => {
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

export default Track;