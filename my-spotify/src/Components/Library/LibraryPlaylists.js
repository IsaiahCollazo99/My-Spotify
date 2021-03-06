import React, { useState, useEffect } from 'react';
import Playlist from '../General/Playlist';
import CollectionTracks from '../General/CollectionTracks';

const LibraryPlaylists = ({spotifyWebApi}) => {
    const [playlists, setPlaylists] = useState([]);

    const getPlaylists = async () => {
        let res = await spotifyWebApi.getUserPlaylists({limit: 50});
        setPlaylists(res.items)
    }

    useEffect(() => {
        getPlaylists();
    }, [])

    let playlistsDisplay = playlists.map(playlist => {
        const {images, name, owner, description, id} = playlist
        return <Playlist img={images[0].url} name={name} owner={owner.display_name} desc={description} id={id} key={id}/>
    })

    let img = "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
    playlistsDisplay.unshift(
        <CollectionTracks img={img} name={"Liked Songs"} key={"likedSongs"} />
    )
    
    return (
         <div id="libraryPlaylists">
            {playlistsDisplay}
        </div>
    )
}

export default LibraryPlaylists