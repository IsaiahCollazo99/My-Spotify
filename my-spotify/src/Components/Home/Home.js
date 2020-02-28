import React from 'react';
import Navbar from './../Navbar/Navbar';
import RecentlyPlayed from './RecentlyPlayed';

const Home = ({token, spotifyWebApi}) => {
    return (
        <div>
            <Navbar />
            <RecentlyPlayed token={token}  spotifyWebApi={spotifyWebApi}/>
        </div>
    )
}

export default Home;