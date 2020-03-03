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
        const {images, name, type, id} = artist;
        let img = images[0];
        let backup = 'https://ya-webdesign.com/transparent250_/blank-profile-picture-png-2.png';
        return <Artist img={img ? img.url : backup} name={name} tag={type} id={id} key={id}/>
    })
    
    return (
        <div id="libraryArtists">
            {artistDisplay}
        </div>
    )
}

export default LibraryArtists