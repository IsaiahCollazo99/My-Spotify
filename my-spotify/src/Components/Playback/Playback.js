import React, { useState, useEffect } from 'react'

const Playback = ({spotifyWebApi}) => {
    const [currentlyPlaying, setCurrentPlaying] = useState({});

    const getPlaybackTrack = async () => {
        let res = await spotifyWebApi.getMyCurrentPlayingTrack();
        setCurrentPlaying(res.item);
    }

    const getPlaybackState = async () => {
       let res = await spotifyWebApi.getMyCurrentPlaybackState();
        if(res.is_playing) {
            await getPlaybackTrack();
        }
    }

    useEffect(() => {
        getPlaybackState();
    }, [currentlyPlaying])

    return (
        <footer className="playback" onClick={getPlaybackTrack}>
            <div className="playbackLeft">
                <p>{currentlyPlaying.name}</p>
                <p>{currentlyPlaying.artists ? currentlyPlaying.artists[0].name : null}</p>
            </div>
        </footer>
    )
}

export default Playback;