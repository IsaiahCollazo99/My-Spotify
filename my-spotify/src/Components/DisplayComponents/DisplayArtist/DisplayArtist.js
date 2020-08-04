import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import Track from '../../General/Track';
import Album from '../../General/Album';
import './../../../css/DisplayComponents/DisplayArtist.css';

const DisplayArtist = ({spotifyWebApi}) => {
    const { id } = useParams();
    const [artist, setArtist] = useState({});
    const [topTracks, setTopTracks] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [singles, setSingles] = useState([]);
    const [gotArtist, setGotArtist] =useState(false);
    const [gotAllAlbums, setGotAllAlbums] = useState(false);
    const [offset, setOffset] = useState(0);

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
        if(!gotAllAlbums) {
            for(let i = 0; i < albumList.length; i++) {
                const album = albumList[i];
                const {album_type, name, artists} = album;
                if(artists[0].id === id) {
                    if(album_type === "album" && seen[name] !== album_type) {
                        seen[name] = album_type;
                        albumTypeAlbum.push(album);
                    } else if(album_type === "single" && seen[name] !== album_type) {
                        seen[name] = album_type;
                        albumTypeSingle.push(album);
                    }
                }
            }

            if(!offset) setOffset(51);
            else setOffset(offset + 50);
    
            setSingles([...singles, ...albumTypeSingle]);
            setAlbums([...albums, ...albumTypeAlbum]);
        }
    }

    const getAlbums = async () => {
        let res = await spotifyWebApi.getArtistAlbums(id, {offset, limit: 50});
        setAlbumType(res.items);
    }

    useBottomScrollListener(getAlbums);

    useEffect(() => {
        getArtist();
        getTopTracks();
        getAlbums();
    }, [])
    
    if(gotArtist) {
        let displayTop = topTracks.map((track, i) => {
            if(i > 4) return null;
            const trackProps = {
                track,
                key: track.id,
                spotifyWebApi,
                context: "artist",
                position: i
            }
            return <Track {...trackProps} />
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
