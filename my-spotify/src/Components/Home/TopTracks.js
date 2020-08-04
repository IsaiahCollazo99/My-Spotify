import React, { useState, useEffect } from 'react';
import Album from './../General/Album';

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
        const {name, album, artists, id} = track
        return <Album name={name} img={album.images[0].url} artist={artists[0].name} id={album.id} key={id}/>
    });
    
    return (
        <div className="homeListContainer">
            <h2>Your Top Tracks</h2>
            <div id="topTracks">
                {tracksToShow}
            </div>
        </div>
    )
}

export default TopTracks;