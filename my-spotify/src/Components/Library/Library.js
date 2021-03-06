import React from 'react';
import LibraryNav from './LibraryNav';
import LibraryPlaylists from './LibraryPlaylists';
import LibraryArtists from './LibraryArtists';
import LibraryAlbums from './LibraryAlbums';
import { Route, Switch, Redirect } from 'react-router-dom';
import './../../css/Library.css';
 
const Library = ({spotifyWebApi}) => {
    return (
        <div>
         <div id="library">
            <LibraryNav />
            <Switch>
                <Redirect exact from="/collection" to="/collection/playlists" />
                <Route path={"/collection/playlists"}>
                    <LibraryPlaylists spotifyWebApi={spotifyWebApi} />
                </Route>
                <Route path={"/collection/artists"}>
                    <LibraryArtists spotifyWebApi={spotifyWebApi} />
                </Route> 
                <Route path={"/collection/albums"}>
                <LibraryAlbums spotifyWebApi={spotifyWebApi} />
                </Route> 
            </Switch>
        </div>
     </div>
    )
}

export default Library;