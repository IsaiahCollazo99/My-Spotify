import React, { useState, useEffect } from 'react';
import Album from './../General/Album';


const LibraryAlbums = ({spotifyWebApi}) => {
    const [albums, setAlbums] = useState([]);

    const getAlbums = async () => {
        let res = await spotifyWebApi.getMySavedAlbums({limit: 50});
        setAlbums(res.items)
    }

    useEffect(() => {
        getAlbums();
    }, [])

    let albumDisplay = albums.map(({album}) => {
        return <Album type={"library"} img={album.images[0].url} name={album.name} artist={album.artists[0].name} key={album.id}/>
    })
    
    return (
        <div id="libraryAlbums">
            {albumDisplay}
        </div>
    )
}

export default LibraryAlbums;