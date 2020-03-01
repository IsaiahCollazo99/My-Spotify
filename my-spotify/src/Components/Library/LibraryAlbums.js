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
        const {images, name, artists, id} = album;
        return <Album img={images[0].url} name={name} artist={artists[0].name} id={id} key={id}/>
    })
    
    return (
        <div id="libraryAlbums">
            {albumDisplay}
        </div>
    )
}

export default LibraryAlbums;