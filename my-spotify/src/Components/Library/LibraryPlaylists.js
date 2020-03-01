import React, { useState, useEffect } from 'react';
import Playlist from '../General/Playlist';

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
        return <Playlist type={"library"} img={playlist.images[0].url} name={playlist.name} owner={playlist.owner.display_name} desc={playlist.description} key={playlist.id}/>
    })

    playlistsDisplay.unshift(
        <Playlist type={"library"} img={"https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"} name={"Liked Songs"} key={"likedSongs"} />
    )
    
    return (
         <div id="libraryPlaylists">
            {playlistsDisplay}
        </div>
    )
}

export default LibraryPlaylists