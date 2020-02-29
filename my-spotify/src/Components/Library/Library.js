import React from 'react';
import LibraryNav from './LibraryNav';
import LibraryPlaylists from './LibraryPlaylists';
import LibraryArtists from './LibraryArtists';
import { Route, Switch, Redirect } from 'react-router-dom';
import './../../css/Library.css';
 
class Library extends React.Component {

    render() {
        return(
            <div id="library">
                <LibraryNav />
                <Switch>
                    <Redirect exact from="/collection" to="/collection/playlists" />
                    <Route path={"/collection/playlists"} component={LibraryPlaylists} />
                    <Route path={"/collection/artists"} component={LibraryArtists} />
                </Switch>
            </div>
        )
    }
    
}

export default Library;