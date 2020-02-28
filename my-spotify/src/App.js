import React from 'react';
import Spotify from 'spotify-web-api-js'; 
import Home from './Components/Home/Home';
import './App.css';

const spotifyWebApi = new Spotify();

class App extends React.Component {
  constructor() {
    super()
    const {access_token} = this.getHashParams();
    this.state = {
      loggedIn: access_token ? true : false,
      nowPlaying: {
        name: 'Not Checked',
        img: ""
      }
    }
    if(access_token) {
      spotifyWebApi.setAccessToken(access_token);
    }
  }
  
  getHashParams = () => {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  getNowPlaying = async () => {
    let res = await spotifyWebApi.getMyCurrentPlaybackState();
    // debugger;
    this.setState({
      nowPlaying: {
        name: res.item.name,
        img: res.item.album.images[0].url
      }
    })
  }
  
  render = () => {
    let {loggedIn} = this.state;
    return (
      <div className="App">
        <a href="http://localhost:8888">
          <button>Login With Spotify</button>
        </a>
          {/* <Home value={access_token}/> */}
          <div> Now Playing: {this.state.nowPlaying.name} </div>
          <img alt="album" src={ this.state.nowPlaying.img } style={{width: 100}}/>
          <button onClick={() => this.getNowPlaying()}>Check Now Playing</button>
        
      </div>
    );
  }
  
}

export default App;
