# My-Spotify
A simple recreation of the Spotify webpage

## Details

With react my spotify recreates the Spotify webpage. Utilizes the Spotify API to fetch the users saved playlists, albums, 
artists and tracks, among other user specific details. 

## Features

* When loading an album or playlist from the API it limits you to fetching 50 of the album/playlist tracks per request. Using
loops it is possible to load all songs on the load; however, this may take a long time and can increase exponentially. To
combat this, My Spotify waits for the user to scroll to the bottom of the page, and from there fetches the next 50 songs.


## [How to Start](https://github.com/IsaiahCollazo99/My-Spotify/blob/master/my-spotify/README.md)
* Use these commands (linked on the above heading) with the frontend folder open in the terminal
* In the auth-server/authorization_code folder run ```node app.js```

## Features to Come
* Ability for the user to control their playback (pause/play, and seek)
* Ability to click and play a song from the app
* Search functionality
