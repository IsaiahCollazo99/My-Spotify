import React, { useState, useEffect, } from 'react';
import { useParams } from 'react-router-dom';
import displayAlbumTracks from './DisplayAlbumTracks';
import './../../../css/DisplayAlbum.css';
import DisplayAlbumTracks from './DisplayAlbumTracks';

const DisplayAlbum = ({spotifyWebApi}) => {
    const { id } = useParams();
    const [album, setAlbum] = useState({});
    const [gotAlbum, setGotAlbum] =useState(false);

    const getAlbum = async () => {
        let res = await spotifyWebApi.getAlbum(id);
        setAlbum(res);
        setGotAlbum(true);
        console.log(album);
    }

    useEffect(() => {
        getAlbum();
    }, [])
    
    if(gotAlbum) {
        let tracks = album.tracks.items.map((track) => {
            return <DisplayAlbumTracks type="displayComponents" name={track.name} artist={track.artists[0].name} runTime={track.duration_ms} />
        });
        
        return (
            <div id="displayAlbum">
                <section id="albumInfo">
                    <img src={album.images[0].url} alt="album Cover" className="displayAlbumCover"/>
                    <h1 id="displayAlbumTitle">{album.name}</h1>
                    <p id="displayAlbumArtist">{album.artists[0].name}</p>
                    <p id="displayAlbumLength">{album.tracks.items.length} SONGS</p>
                </section>
                <section id="displayAlbumTracks">
                    {tracks}
                </section>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
    
}

export default DisplayAlbum;