import React, { useState, useEffect } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import Track from './../../General/Track';
import './../../../css/DisplayComponents/DisplayTracks.css';

const DisplayLibraryTracks = ({spotifyWebApi}) => {
    const [tracks, setTracks] = useState([]);
    const [offset, setOffset] = useState(0);
    const [gotTracks, setGotTracks] = useState(false);
    const [totalTracks, setTotalTracks] = useState(0);

    const getLikedTracks = async () => {
        let res = await spotifyWebApi.getMySavedTracks({offset, limit: 50});
        setTracks([...tracks, ...res.items]);
        
        if(!gotTracks) {
            setOffset(51);
            setTotalTracks(res.total);
            setGotTracks(true);
        } else {
            setOffset(offset + 50)
        }
    }

    useBottomScrollListener(getLikedTracks);

    useEffect(() => {
        getLikedTracks();
    }, [])

    if(gotTracks) {
        let displayTracks = tracks.map(({ track }) => {
            const trackProps = {
                track,
                key: track.id,
                spotifyWebApi,
                context: "playlist"
            }
            return <Track {...trackProps} />
        })

        let img = "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"

        return (
            <div className="displayTracks">
                <section className="displayInfo">
                    <img src={img} alt="Playlist Cover" className="displayCover" />
                    <h1>Liked Songs</h1>
                    <p className="displayLength">{totalTracks} SONGS</p>
                </section>
                <section className="displayAllTracks">
                    {displayTracks}
                </section>
            </div>
        )
    } else {
        return (
            <div className="displayTracks"></div>
        )
    }


}
export default DisplayLibraryTracks;