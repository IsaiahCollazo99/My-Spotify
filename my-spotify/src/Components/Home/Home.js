import React from 'react';
import Navbar from './../Navbar/Navbar';
import RecentlyPlayed from './RecentlyPlayed';

const Home = (props) => {
    return (
        <div>
            <Navbar />
            <RecentlyPlayed />
        </div>
    )
}

export default Home;