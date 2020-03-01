import React, { useState, useEffect } from 'react';
import Album from '../General/Album';

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
        const {name, images, artists, id} = release
        return <Album name={name} img={images[0].url} artist={artists[0].name} id={id} key={id}/>
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