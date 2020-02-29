import React from 'react';
import Track from './../General/Track';

class TopTracks extends React.Component {
    state = {
        topTracks: []
    }

    componentDidMount = () => {
        let {spotifyWebApi} = this.props;
        spotifyWebApi.getMyTopTracks().then(res => {
            this.setState(prevState => ({topTracks: res.items}));
        })
    }

    render = () => {
        let {topTracks} = this.state;
        let tracksToShow;
        if(topTracks.length) {
            tracksToShow = topTracks.map((track, i) => {
                if(i > 5) return null;
                return <Track name={track.name} img={track.album.images[0].url} artist={track.artists[0].name} key={track.id}/>
            })
        }
        return (
            <div>
                <h2>Your Top Tracks</h2>
                <div id="topTracks">
                    {tracksToShow}
                </div>
            </div>
        )
    }
}

export default TopTracks;