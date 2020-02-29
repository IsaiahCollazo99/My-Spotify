import React from 'react';
import Artist from './../General/Artist';

class TopArtists extends React.Component {
    state = {
        topArtists: []
    }

    componentDidMount = () => {
        let {spotifyWebApi} = this.props;
        spotifyWebApi.getMyTopArtists().then(res => {
            this.setState(prevState => ({topArtists: res.items}));
        })
    }

    render = () => {
        let {topArtists} = this.state;
        let artistsToShow;
        if(topArtists.length) {
            artistsToShow = topArtists.map((artist, i) => {
                if(i > 5) return null;
                return <Artist name={artist.name} img={artist.images[0].url} key={artist.id}/>
            })
        }
        return (
            <div>
                <h2>Your Top Artists</h2>
                <div id="topArtists">
                    {artistsToShow}
                </div>
            </div>
        )
    }
}

export default TopArtists;