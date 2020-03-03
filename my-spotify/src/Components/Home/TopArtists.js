import React, { useState, useEffect } from 'react';
import Artist from './../General/Artist';

const TopArtists = ({spotifyWebApi}) => {
    const [topArtists, setTopArtists] = useState([]);

    const getTopArtists = async () => {
        let res = await spotifyWebApi.getMyTopArtists();
        setTopArtists(res.items);
    }

    useEffect(() => {
        getTopArtists();
    }, [])

    let artistsToShow = topArtists.map((artist, i) => {
        if(i > 5) return null;
        const {name, images, type, id} = artist;
        return <Artist name={name} img={images[0].url} tag={type} id={id} key={id}/>
    });
    
    return (
        <div>
            <h2>Your Top Artists</h2>
            <div id="topArtists">
                {artistsToShow}
            </div>
        </div>
    )
}

export default TopArtists;