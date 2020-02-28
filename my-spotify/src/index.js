import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SpotifyApiContext from 'react-spotify-api';

ReactDOM.render(
    <SpotifyApiContext.Provider value={"5faa67c1df8d44f5ba10b001e724ad6a"}>
        <App />
    </SpotifyApiContext.Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
