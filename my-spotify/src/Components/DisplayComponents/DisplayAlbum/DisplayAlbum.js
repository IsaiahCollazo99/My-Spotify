import React, { useState, useEffect, } from 'react';
import { useParams } from 'react-router-dom';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import Track from '../../General/Track';
import './../../../css/DisplayComponents/DisplayTracks.css';

const DisplayAlbum = ({spotifyWebApi}) => {
    const { id } = useParams();
    const [tracks, setTracks] = useState([]);
    const [gotTracks, setGotTracks] = useState(false);
    const [offset, setOffset] = useState(0);
    const [album, setAlbum] = useState({});
    const [gotAlbum, setGotAlbum] =useState(false);

    const getAlbumTracks = async () => {
        let res = await spotifyWebApi.getAlbumTracks(id, {offset, limit: 50});
        setTracks([...tracks, ...res.items]);

        if(!gotTracks) {
            setOffset(51);
            setGotTracks(true);
        } else {
            setOffset(offset + 50)
        }
    }

    useBottomScrollListener(getAlbumTracks);

    const getAlbum = async () => {
        let res = await spotifyWebApi.getAlbum(id);
        setAlbum(res);
        setGotAlbum(true);
    }

    useEffect(() => {
        if(!gotAlbum || !gotTracks) {
            getAlbum();
            getAlbumTracks();
        }
    }, [])
    
    if(gotAlbum) {
        let displayTracks = tracks.map((track, i) => {
            const trackProps = {
                track,
                key: track.track_id,
                spotifyWebApi,
                context: "album",
                position: i
            }
            return <Track {...trackProps} />
        });
        
        return (
            <div className="displayTracks">
                <section className="displayInfo">
                    <img src={album.images[0].url} alt="album Cover" className="displayCover"/>
                    <h1 className="displayName">{album.name}</h1>
                    <p className="displayOwner">{album.artists[0].name}</p>
                    <p className="displayLength">{album.tracks.items.length} SONGS</p>
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

export default DisplayAlbum;