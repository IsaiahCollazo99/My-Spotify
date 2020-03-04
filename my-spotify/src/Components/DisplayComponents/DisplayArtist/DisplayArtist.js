import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Track from '../../General/Track';
import Album from '../../General/Album';
import './../../../css/DisplayArtist.css';

const DisplayArtist = ({spotifyWebApi}) => {
    const { id } = useParams();
    const [artist, setArtist] = useState({});
    const [topTracks, setTopTracks] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [singles, setSingles] = useState([]);
    const [gotArtist, setGotArtist] =useState(false);

    const getArtist = async () => {
        let res = await spotifyWebApi.getArtist(id);
        setArtist(res);
        setGotArtist(true);
    }

    const getTopTracks = async () => {
        let res = await spotifyWebApi.getArtistTopTracks(id, "US");
        setTopTracks(res.tracks);
    }

    const setAlbumType = (albumList) => {
        let albumTypeAlbum = [];
        let albumTypeSingle = [];
        let seen = {}
        albumList.forEach(album => {
            const {album_type, name} = album;
            if(album_type === "album" && seen[name] !== album_type) {
                seen[name] = album_type;
                albumTypeAlbum.push(album);
            } else if(album_type === "single" && seen[name] !== album_type) {
                seen[name] = album_type;
                albumTypeSingle.push(album);
            }
        })
        setSingles(albumTypeSingle);
        setAlbums(albumTypeAlbum);
    }

    const getAlbums = async () => {
        let res = await spotifyWebApi.getArtistAlbums(id, {limit: 50});
        setAlbumType(res.items);
    }

    useEffect(() => {
        getArtist();
        getTopTracks();
        getAlbums();
    }, [])
    
    if(gotArtist) {
        let displayTop = topTracks.map((track, i) => {
            if(i > 4) return null;
            const {duration_ms, name, artists, id} = track;
            return <Track runTime={duration_ms} name={name} artist={artists[0].name} key={id}/>
        })

        let displayAlbums = albums.map(album => {
            const {images, name, artists, id} = album;
            return <Album img={images[0].url} name={name} artist={artists[0].name} id={id} key={id}/>
        })

        let displaySingles = singles.map(single => {
            const {images, name, artists, id} = single;
            return <Album img={images[0].url} name={name} artist={artists[0].name} id={id} key={id}/>
        })
        
        return (
            <div id="displayArtist">
                <section id="artistHeader">
                    <h1>{artist.name}</h1>
                </section>
                <h2>Top Tracks</h2>
                <section id="artistTop">
                    {displayTop}
                </section>
                <h2>Albums</h2>
                <section id="artistAlbums">
                    {displayAlbums}
                </section>
                <h2>Singles & EPs</h2>
                <section id="artistSingles">
                    {displaySingles}
                </section>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

}

export default DisplayArtist;
