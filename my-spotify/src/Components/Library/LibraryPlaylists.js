import React from 'react';
import Playlist from '../General/Playlist';
import './../../css/LibraryPlaylists.css';

class LibraryPlaylists extends React.Component {

    state = {
        playlists: []
    }

    async componentDidMount() {
        let res = await this.getPlaylists();
        this.setState({playlists: res});
    }

    getPlaylists = async () => {
        const {spotifyWebApi} = this.props;
        let output = [];
        let res = await spotifyWebApi.getUserPlaylists({limit: 50});
        return res.items;
    }

    render() {
        let {playlists} = this.state;
        let playlistsDisplay = playlists.map(playlist => {
            return <Playlist type={"library"} img={playlist.images[0].url} name={playlist.name} owner={playlist.owner.display_name} desc={playlist.description} key={playlist.id}/>
        })

        playlistsDisplay.unshift(
            <Playlist type={"library"} img={"https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"} name={"Liked Songs"} key={"likedSongs"} />
        )
        return (
            <div id="libraryPlaylists">
                {playlistsDisplay}
            </div>
        )
    }
}

export default LibraryPlaylists