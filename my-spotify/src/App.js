import React, { useState, useEffect } from 'react';
import Spotify from 'spotify-web-api-js'; 
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Library from './Components/Library/Library';
import Navbar from './Components/Navbar/Navbar';
import DisplayAlbum from './Components/DisplayComponents/DisplayAlbum/DisplayAlbum';
import DisplayArtist from './Components/DisplayComponents/DisplayArtist/DisplayArtist';
import './App.css';

const spotifyWebApi = new Spotify();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  
  const getHashParams = () => {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  const access_token = getHashParams().access_token;

  useEffect(() => {
    if(access_token) {
      setLoggedIn(true)
      spotifyWebApi.setAccessToken(access_token);
    }
  })

  if(loggedIn) {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path={"/collection"}>
            <Library spotifyWebApi={spotifyWebApi}/>
          </Route>

          <Route path={"/album/:id"}>
            <DisplayAlbum spotifyWebApi={spotifyWebApi}/>
          </Route>

          <Route path={"/artist/:id"}>
            <DisplayArtist spotifyWebApi={spotifyWebApi}/>
          </Route>
          <Route exact path={"/"} >
            <Home spotifyWebApi={spotifyWebApi}/>
          </Route>
        </Switch> 
      </div>    
    );
  } else {
    return (
      <Login />
    )
  }

  
}

export default App;
