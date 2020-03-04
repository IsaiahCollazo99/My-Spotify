import React, { useState, useEffect } from 'react';
import Track from './../../General/Track';
import './../../../css/DisplayComponents/DisplayTracks.css';

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
            <div></div>
        )
    }


}
export default DisplayLibraryTracks;