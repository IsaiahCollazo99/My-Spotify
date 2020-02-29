import React from 'react';
import LibraryNav from './LibraryNav';
import libraryPlaylists from './LibraryPlaylists';
import { Route, Switch } from 'react-router-dom';
import './../../css/Library.css';
 
class Library extends React.Component {

    render() {
        return(
            <div id="library">
                <LibraryNav />
                <Switch>
                    <Route path={"/collection/playlists"} component={libraryPlaylists} />
                </Switch>
            </div>
        )
    }
    
}

export default Library;