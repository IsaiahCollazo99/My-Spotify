import React from 'react';
import Track from '../General/Track';
import './../../css/NewReleases.css';

class NewReleases extends React.Component {
    state = {
        newReleases: []
    }

    componentDidMount = () => {
        let {spotifyWebApi} = this.props;
        spotifyWebApi.getNewReleases().then(res => {
            this.setState(prevState => ({newReleases: res.albums.items}));
        })
    }

    render = () => {
        let {newReleases} = this.state;
        let releasesToShow;
        if(newReleases.length) {
            releasesToShow = newReleases.map((release, i) => {
                if(i > 5) return null;
                return <Track name={release.name} img={release.images[0].url} artist={release.artists[0].name} key={release.id}/>
            })
        }
        return (
            <div>
                <h2>New Releases</h2>
                <div id="newReleases">
                    {releasesToShow}
                </div>
            </div>
        )
    }
}

export default NewReleases;