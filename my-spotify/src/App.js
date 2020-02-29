import React from 'react';
import Spotify from 'spotify-web-api-js'; 
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NowPlaying from './Components/NowPlaying/NowPlaying';
import Library from './Components/Library/Library';
import Navbar from './Components/Navbar/Navbar';
import './App.css';

const spotifyWebApi = new Spotify();

class App extends React.Component {
  constructor() {
    super()
    const {access_token} = this.getHashParams();
    this.token = access_token;
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
  
  render(){
    let {nowPlaying} = this.state;
    let {name, img} = nowPlaying;
    return (
      <div className="App">
        <Navbar />
        <Switch>

            <Route path={"/login"} component={Login} />
            <Route path={"/nowPlaying"} component={NowPlaying} name={name} img={img} handleClick={this.getNowPlaying}/>
            <Route path={"/library"}>
              <Library token={this.token} spotifyWebApi={spotifyWebApi}/>
            </Route>
            <Route exact path={"/"} >
              <Home token={this.token} spotifyWebApi={spotifyWebApi}/>
            </Route>
          </Switch>
      </div>
    );
  }
  
}

export default App;
