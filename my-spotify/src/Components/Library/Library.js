import React from 'react';
import LibraryNav from './LibraryNav';
import LibraryPlaylists from './LibraryPlaylists';
import LibraryArtists from './LibraryArtists';
import LibraryAlbums from './LibraryAlbums';
import { Route, Switch, Redirect } from 'react-router-dom';
import './../../css/Library.css';
 
class Library extends React.Component {

    render() {
        const {spotifyWebApi} = this.props
        return(
            <div id="library">
                <LibraryNav />
                <Switch>
                    <Redirect exact from="/collection" to="/collection/playlists" />
                    <Route path={"/collection/playlists"}>
                        <LibraryPlaylists spotifyWebApi={spotifyWebApi} />
                    </Route>
                    <Route path={"/collection/artists"} component={LibraryArtists} />
                    <Route path={"/collection/albums"} component={LibraryAlbums} />
                </Switch>
            </div>
        )
    }
    
}

export default Library;