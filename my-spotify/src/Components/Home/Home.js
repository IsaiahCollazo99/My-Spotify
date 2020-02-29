import React from 'react';
import Navbar from './../Navbar/Navbar';
import RecentlyPlayed from './RecentlyPlayed';
import './../../css/Home.css';
import NewReleases from './NewReleases';

const Home = ({token, spotifyWebApi}) => {
    return (
        <div id="homeDiv">
            <Navbar />
            <RecentlyPlayed token={token}  spotifyWebApi={spotifyWebApi}/>
            <NewReleases token={token}  spotifyWebApi={spotifyWebApi} />
        </div>
    )
}

export default Home;