import React from 'react';
import Track from '../General/Track';

class RecentlyPlayed extends React.Component {
    state = {
        recents: []
    }

    componentDidMount = () => {
        let {spotifyWebApi} = this.props;
        spotifyWebApi.getMyRecentlyPlayedTracks().then(response => {
            this.setState(prevState => ({recents: response.items}));
        });
    }

    render = () => {
        let {recents} = this.state;
        let recentTracks
        if(recents.length) {
            recentTracks = recents.map(song => {
                console.log(song);
                let track = song.track;
                return <Track name={track.name} img={track.album.images[0].url} artist={track.artists[0].name}/>
            });
        }
        
        return (
            <div>
                {recentTracks}
            </div>
        )
    }
    
} // End of RecentlyPlayed Component

export default RecentlyPlayed;