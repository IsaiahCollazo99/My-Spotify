import React from 'react';
import Navbar from './../Navbar/Navbar';
import RecentlyPlayed from './RecentlyPlayed';

const Home = ({token}) => {
    return (
        <div>
            <Navbar />
            <RecentlyPlayed token={token}/>
        </div>
    )
}

export default Home;