import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Track from './../../General/Track';
import './../../../css/DisplayPlaylist.css';

const DisplayPlaylist = ({spotifyWebApi}) => {
    const { id } = useParams();
    const [tracks, setTracks] = useState([]);
    const [gotTracks, setGotTracks] = useState(false);
    const [playlist, setPlaylist] = useState({});
    const [gotPlaylist, setGotPlaylist] = useState(false);

    const getPlaylistTracks = async () => {
        let res = await spotifyWebApi.getPlaylistTracks(id, {limit: 50});
        setTracks(res.items);
        setGotTracks(true);
    }

    const getPlaylist = async () => {
        let res = await spotifyWebApi.getPlaylist(id);
        setPlaylist(res);
        setGotPlaylist(true);
    }

    useEffect(() => {
        if(!gotPlaylist || !gotTracks) {
            getPlaylist();
            getPlaylistTracks();
        }
    })

    if(gotTracks && gotPlaylist) {
        let displayTracks = tracks.map(trackObj => {
            const { track } = trackObj;
            const {duration_ms, name, artists, id} = track;
            return <Track runTime={duration_ms} name={name} artist={artists[0].name} key={id}/>
        })

        return (
            <div id="displayPlaylist">
                <section id="playlistInfo">
                    <img src={playlist.images[0].url} alt="Playlist Cover" id="displayPlaylistCover" />
                    <h1>{playlist.name}</h1>
                    <p id="displayPlaylistOwner">{playlist.owner ? playlist.owner.display_name : null}</p>
                    <p id="displayPlaylistLength">{playlist.tracks.total} SONGS</p>
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
export default DisplayPlaylist;