import React from 'react';
import RecentlyPlayed from './RecentlyPlayed';
import NewReleases from './NewReleases';
import TopArtists from './TopArtists';
import TopTracks from './TopTracks';
import './../../css/Home.css';

const Home = ({token, spotifyWebApi}) => {
    return (
        <div id="homeDiv"> 
            <RecentlyPlayed token={token}  spotifyWebApi={spotifyWebApi}/>
            <NewReleases token={token}  spotifyWebApi={spotifyWebApi} />
            <TopArtists token={token} spotifyWebApi={spotifyWebApi} />
            <TopTracks token={token} spotifyWebApi={spotifyWebApi} />
        </div>
    )
}

export default Home;