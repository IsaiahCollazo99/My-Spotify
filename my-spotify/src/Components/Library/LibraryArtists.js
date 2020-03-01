import React, {useState, useEffect} from 'react';
import Artist from './../General/Artist.js';

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
        let img = artist.images[0]
        return <Artist type={"library"} img={img ? img.url : "./../../../public/assets/blank-profile-picture-png-2-original.png"} name={artist.name} key={artist.id}/>
    })
    
    return (
        <div id="libraryArtists">
            {artistDisplay}
        </div>
    )
}

export default LibraryArtists