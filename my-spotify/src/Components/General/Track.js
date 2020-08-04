import React from 'react';
import { useParams } from 'react-router-dom';

const msToMinutesAndSeconds = (ms) => {
    let minutes = Math.floor(ms / 60000);
    let seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const Track = ({ track, context, position, spotifyWebApi }) => {
    const { duration_ms: runTime, name, artists } = track;
    const [ { name: artist } ] = artists;
    const { id: contextId } = useParams();
    
    let time = msToMinutesAndSeconds(runTime);

    const isValidContext = () => {
        return context === "album" || context === "playlist";
    }

    const playSong = () => {
        try {
            console.log({context, contextId, position});
            if(isValidContext()) {
                spotifyWebApi.play({context_uri: `spotify:${context}:${contextId}`, offset: {position} })
            } else {
                console.log(track.id)
                spotifyWebApi.play({uris: [`spotify:track:${track.id}`]});
            }
        } catch ( error ) {
            console.log(error)
        }
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