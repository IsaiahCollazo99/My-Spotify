import React, { useState, useEffect } from 'react';
import Track from '../General/Track';

const RecentlyPlayed = ({spotifyWebApi}) => {
    const [recents, setRecents] = useState([]);

    const getRecents = async () => {
        let res = await spotifyWebApi.getMyRecentlyPlayedTracks();
        setRecents(res.items);
    }

    useEffect(() => {
        getRecents();
    }, [])

    let recentTracks = recents.map((song, i) => {
        if(i > 5) return null;
        let track = song.track;
        return <Track name={track.name} img={track.album.images[0].url} artist={track.artists[0].name} key={track.id}/>
    });
    
    return (
        <div>
            <h2>Recent Tracks</h2>
            <div id="recents">
                {recentTracks}
            </div>
        </div>
    )
}

export default RecentlyPlayed;