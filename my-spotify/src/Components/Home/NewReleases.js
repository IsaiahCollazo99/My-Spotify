import React, { useState, useEffect } from 'react';
import Track from '../General/Track';

const NewReleases = ({spotifyWebApi}) => {
    const [newReleases, setNewReleases] = useState([]);
    
    const getReleases = async () => {
        let res = await spotifyWebApi.getNewReleases();
        setNewReleases(res.albums.items)
    }

    useEffect(() => {
        getReleases();
    }, [])

    let releases = newReleases.map((release, i) => {
        if(i > 5) return null;
        return <Track name={release.name} img={release.images[0].url} artist={release.artists[0].name} key={release.id}/>
    })

    return (
        <div>
            <h2>New Releases</h2>
            <div id="newReleases">
                {releases}
            </div>
        </div>
    )
}

export default NewReleases;