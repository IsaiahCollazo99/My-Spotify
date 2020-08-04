import React, { useState, useEffect } from 'react';
import Album from '../General/Album';

const RecentlyPlayed = ({spotifyWebApi}) => {
    const [recents, setRecents] = useState([]);

    const getRecents = async () => {
        let res = await spotifyWebApi.getMyRecentlyPlayedTracks();
        setRecents(res.items);
    }

    useEffect(() => {
        getRecents();
    }, [])

    let recentlyPlayed = {}
    let recentlyPlayedCount = 0;
    let recentTracks = recents.map((recent) => {
        if(recentlyPlayedCount > 5) return null
        let { track } = recent;
        const { album, artists } = track
        const { id, name, images } = album
        if(!recentlyPlayed[id]) {
            recentlyPlayed[id] = 1;
            recentlyPlayedCount++;
            return <Album name={name} img={images[0].url} artist={artists[0].name} id={id} key={id} />
        } else {
            return null;
        }
    });
    
    return (
        <div className="homeListContainer">
            <h2>Recently Played</h2>
            <div id="recents">
                {recentTracks}
            </div>
        </div>
    )
}

export default RecentlyPlayed;