import React, { useState } from 'react';
import Spotify from 'spotify-web-api-js'; 
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Library from './Components/Library/Library';
import Navbar from './Components/Navbar/Navbar';
import './App.css';

const spotifyWebApi = new Spotify();

const App = () => {
  const getHashParams = () => {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  const access_token = getHashParams();

  if(access_token) {
    spotifyWebApi.setAccessToken(access_token);
  }

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path={"/login"} component={Login} />
        <Route path={"/collection"}>
          <Library token={access_token} spotifyWebApi={spotifyWebApi}/>
        </Route>
        <Route exact path={"/"} >
          <Home token={access_token} spotifyWebApi={spotifyWebApi}/>
        </Route>
      </Switch>
    </div>
    );
}

export default App;
