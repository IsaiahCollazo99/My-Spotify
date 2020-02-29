import React from 'react';
import Navbar from './../Navbar/Navbar';
import RecentlyPlayed from './RecentlyPlayed';
import NewReleases from './NewReleases';
import TopArtists from './TopArtists';
import TopTracks from './TopTracks';
import './../../css/Home.css';

const Home = ({token, spotifyWebApi}) => {
    return (
        <div id="homeDiv">
            <Navbar />
            <section id="homeComponents">
                <RecentlyPlayed token={token}  spotifyWebApi={spotifyWebApi}/>
                <NewReleases token={token}  spotifyWebApi={spotifyWebApi} />
                <TopArtists token={token} spotifyWebApi={spotifyWebApi} />
                <TopTracks token={token} spotifyWebApi={spotifyWebApi} />
            </section>
            
        </div>
    )
}

export default Home;