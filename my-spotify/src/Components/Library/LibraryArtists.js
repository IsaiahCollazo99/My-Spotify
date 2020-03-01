import React, {useState, useEffect} from 'react';
import Artist from './../General/Artist.js';
import './../../css/LibraryArtist.css';

const LibraryArtists = ({spotifyWebApi}) => {
    const [artists, setArtists] = useState([]);

    const getArtists = async () => {
        let res = await spotifyWebApi.getFollowedArtists({limit: 50});
        setArtists(res.artists.items)
    }

    useEffect(() => {
        getArtists();
    }, [])

    let artistDisplay = artists.map(artist => {
        let img = artist.images[0];
        let backup = 'https://ya-webdesign.com/transparent250_/blank-profile-picture-png-2.png';
        return <Artist type={"library"} img={img ? img.url : backup} name={artist.name} tag={artist.type} key={artist.id}/>
    })
    
    return (
        <div id="libraryArtists">
            {artistDisplay}
        </div>
    )
}

export default LibraryArtists