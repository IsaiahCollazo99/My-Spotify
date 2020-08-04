import React from 'react';
import { useParams } from 'react-router-dom';

const msToMinutesAndSeconds = (ms) => {
    let minutes = Math.floor(ms / 60000);
    let seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const Track = ({track, spotifyWebApi}) => {
    const { duration_ms: runTime, name, artists, id } = track;
    const [ { name: artist } ] = artists;
    const { id: albumId } = useParams();
    
    let time = msToMinutesAndSeconds(runTime);

    const playSong = () => {
        spotifyWebApi.play({uris: [`spotify:track:${id}`]})
    }
    
    return (
        <div className="displayTrack" onClick={playSong}>
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