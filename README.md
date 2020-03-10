# My-Spotify
A simple recreation of the Spotify webpage

## Details

With react my spotify recreates the Spotify webpage. Utilizes the Spotify API to fetch the users saved playlists, albums, 
artists and tracks, among other user specific details. 

### Features

* When loading an album or playlist from the API it limits you to fetching 50 of the album/playlist tracks per request. Using
loops it is possible to load all songs on the load; however, this may take a long time and can increase exponentially. To
combat this, My Spotify waits for the user to scroll to the bottom of the page, and from there fetches the next 50 songs.
