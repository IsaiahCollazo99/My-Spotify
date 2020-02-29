import React, { useState, useEffect } from 'react';
import Track from './../General/Track';

const TopTracks = ({spotifyWebApi}) => {
    const [topTracks, setTopTracks] = useState([]);

    const getTopTracks = async () => {
        let res = await spotifyWebApi.getMyTopTracks();
        setTopTracks(res.items);
    }

    useEffect(() => {
        getTopTracks();
    }, [])

    let tracksToShow = topTracks.map((track, i) => {
        if(i > 5) return null;
        return <Track name={track.name} img={track.album.images[0].url} artist={track.artists[0].name} key={track.id}/>
    });
    
    return (
        <div>
            <h2>Your Top Tracks</h2>
            <div id="topTracks">
                {tracksToShow}
            </div>
        </div>
    )
}

export default TopTracks;