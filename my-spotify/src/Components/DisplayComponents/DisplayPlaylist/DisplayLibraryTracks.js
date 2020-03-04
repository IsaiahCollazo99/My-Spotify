import React, { useState, useEffect } from 'react';
import Track from './../../General/Track';
import './../../../css/DisplayPlaylist.css';

const DisplayLibraryTracks = ({spotifyWebApi}) => {
    const [tracks, setTracks] = useState([]);
    const [gotTracks, setGotTracks] = useState(false);
    const [totalTracks, setTotalTracks] = useState(0);

    const getLikedTracks = async () => {
        let res = await spotifyWebApi.getMySavedTracks({limit: 50});
        setTracks(res.items);
        setTotalTracks(res.total);
        setGotTracks(true);
    }

    useEffect(() => {
        getLikedTracks();
    })

    if(gotTracks) {
        let displayTracks = tracks.map(trackObj => {
            const { track } = trackObj;
            const {duration_ms, name, artists, id} = track;
            return <Track runTime={duration_ms} name={name} artist={artists[0].name} key={id}/>
        })

        let img = "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"

        return (
            <div id="displayPlaylist">
                <section id="playlistInfo">
                    <img src={img} alt="Playlist Cover" id="displayPlaylistCover" />
                    <h1>Liked Songs</h1>
                    <p id="displayPlaylistLength">{totalTracks} SONGS</p>
                </section>
                <section id="displayPlaylistTracks">
                    {displayTracks}
                </section>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }


}
export default DisplayLibraryTracks;