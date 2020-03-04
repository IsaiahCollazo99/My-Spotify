import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Track from './../../General/Track';
import './../../../css/DisplayComponents/DisplayTracks.css';

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
            <div className="displayTracks">
                <section className="displayInfo">
                    <img src={playlist.images[0].url} alt="Playlist Cover" className="displayCover" />
                    <h1 className="displayName">{playlist.name}</h1>
                    <p className="displayOwner">{playlist.owner ? playlist.owner.display_name : null}</p>
                    <p className="displayLength">{playlist.tracks.total} SONGS</p>
                </section>
                <section className="displayAllTracks">
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