(this["webpackJsonpmy-spotify"]=this["webpackJsonpmy-spotify"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,,,,,,,,,function(e,t,a){e.exports=a(44)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),s=a.n(c),i=(a(30),a(2)),l=a(22),u=a.n(l),o=a(11),m=a(1),p=a.n(m),f=a(3),b=a(4),y=function(e){var t=e.img,a=e.name,n=e.artist,c=e.id;return r.a.createElement(b.b,{to:"/album/".concat(c),className:"displayAnchor"},r.a.createElement("div",{className:"libraryAlbum"},r.a.createElement("img",{src:t,alt:"album",className:"albumImg"}),r.a.createElement("p",{className:"albumName"},a.length<=16?a:a.slice(0,16)+"..."),r.a.createElement("p",{className:"albumArtist"},n)))},v=function(e){var t=e.spotifyWebApi,a=Object(n.useState)([]),c=Object(i.a)(a,2),s=c[0],l=c[1],u=function(){var e=Object(f.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMyRecentlyPlayedTracks();case 2:a=e.sent,l(a.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){u()}),[]);var o={},m=0,b=s.map((function(e){if(m>5)return null;var t=e.track,a=t.album,n=t.artists,c=a.id,s=a.name,i=a.images;return o[c]?null:(o[c]=1,m++,r.a.createElement(y,{name:s,img:i[0].url,artist:n[0].name,id:c,key:c}))}));return r.a.createElement("div",{className:"homeListContainer"},r.a.createElement("h2",null,"Recently Played"),r.a.createElement("div",{id:"recents"},b))},d=function(e){var t=e.spotifyWebApi,a=Object(n.useState)([]),c=Object(i.a)(a,2),s=c[0],l=c[1],u=function(){var e=Object(f.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getNewReleases();case 2:a=e.sent,l(a.albums.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){u()}),[]);var o=s.map((function(e,t){if(t>5)return null;var a=e.name,n=e.images,c=e.artists,s=e.id;return r.a.createElement(y,{name:a,img:n[0].url,artist:c[0].name,id:s,key:s})}));return r.a.createElement("div",{className:"homeListContainer"},r.a.createElement("h2",null,"New Releases"),r.a.createElement("div",{id:"newReleases"},o))},E=function(e){var t=e.name,a=e.img,n=e.tag,c=e.id;return r.a.createElement(b.b,{to:"/artist/".concat(c),className:"displayAnchor"},r.a.createElement("div",{className:"artist"},r.a.createElement("img",{src:a,alt:"artist",className:"artistImg"}),r.a.createElement("p",{className:"artistName"},t.length<=17?t:t.slice(0,17)+"..."),r.a.createElement("p",{className:"artistTag"},n[0].toUpperCase()+n.slice(1))))},O=function(e){var t=e.spotifyWebApi,a=Object(n.useState)([]),c=Object(i.a)(a,2),s=c[0],l=c[1],u=function(){var e=Object(f.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMyTopArtists();case 2:a=e.sent,l(a.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){u()}),[]);var o=s.map((function(e,t){if(t>5)return null;var a=e.name,n=e.images,c=e.type,s=e.id;return r.a.createElement(E,{name:a,img:n[0].url,tag:c,id:s,key:s})}));return r.a.createElement("div",{className:"homeListContainer"},r.a.createElement("h2",null,"Your Top Artists"),r.a.createElement("div",{id:"topArtists"},o))},j=function(e){var t=e.spotifyWebApi,a=Object(n.useState)([]),c=Object(i.a)(a,2),s=c[0],l=c[1],u=function(){var e=Object(f.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMyTopTracks();case 2:a=e.sent,l(a.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){u()}),[]);var o=s.map((function(e,t){if(t>5)return null;var a=e.name,n=e.album,c=e.artists,s=e.id;return r.a.createElement(y,{name:a,img:n.images[0].url,artist:c[0].name,id:n.id,key:s})}));return r.a.createElement("div",{className:"homeListContainer"},r.a.createElement("h2",null,"Your Top Tracks"),r.a.createElement("div",{id:"topTracks"},o))},g=(a(36),function(e){var t=e.token,a=e.spotifyWebApi;return r.a.createElement("div",{id:"homeDiv"},r.a.createElement(v,{token:t,spotifyWebApi:a}),r.a.createElement(d,{token:t,spotifyWebApi:a}),r.a.createElement(O,{token:t,spotifyWebApi:a}),r.a.createElement(j,{token:t,spotifyWebApi:a}))}),h=(a(37),function(e){return r.a.createElement("div",null,r.a.createElement("a",{href:"http://localhost:8888/login"},r.a.createElement("button",null,"Login With Spotify")))}),k=(a(38),function(e){return r.a.createElement("nav",{id:"libraryNav"},r.a.createElement(b.c,{exact:!0,to:"/collection/playlists"},"PLAYLISTS"),r.a.createElement(b.c,{exact:!0,to:"/collection/artists"},"ARTISTS"),r.a.createElement(b.c,{exact:!0,to:"/collection/albums"},"ALBUMS"))}),N=function(e){var t=e.img,a=e.name,n=e.owner,c=e.id;return n?r.a.createElement(b.b,{to:"/playlist/".concat(c),className:"displayAnchor"},r.a.createElement("div",{className:"libraryPlaylist"},r.a.createElement("img",{src:t,alt:"playlist",className:"playlistImg"}),r.a.createElement("p",{className:"playlistName"},a.length<=17?a:a.slice(0,17)+"..."),r.a.createElement("p",{className:"playlistOwner"},"By ",n.length<=17?n:n.slice(0,17)+"..."))):r.a.createElement("div",{className:"libraryPlaylist"},r.a.createElement("img",{src:t,alt:"playlist",className:"playlistImg"}),r.a.createElement("p",{className:"playlistName"},a.length<=17?a:a.slice(0,17)+"..."))},A=function(e){var t=e.img,a=e.name;return r.a.createElement(b.b,{to:"/tracks",className:"displayAnchor"},r.a.createElement("div",{className:"libraryPlaylist"},r.a.createElement("img",{src:t,alt:"playlist",className:"playlistImg"}),r.a.createElement("p",{className:"playlistName"},a.length<=17?a:a.slice(0,17)+"...")))},w=function(e){var t=e.spotifyWebApi,a=Object(n.useState)([]),c=Object(i.a)(a,2),s=c[0],l=c[1],u=function(){var e=Object(f.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getUserPlaylists({limit:50});case 2:a=e.sent,l(a.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){u()}),[]);var o=s.map((function(e){var t=e.images,a=e.name,n=e.owner,c=e.description,s=e.id;return r.a.createElement(N,{img:t[0].url,name:a,owner:n.display_name,desc:c,id:s,key:s})}));return o.unshift(r.a.createElement(A,{img:"https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png",name:"Liked Songs",key:"likedSongs"})),r.a.createElement("div",{id:"libraryPlaylists"},o)},x=(a(39),function(e){var t=e.spotifyWebApi,a=Object(n.useState)([]),c=Object(i.a)(a,2),s=c[0],l=c[1],u=function(){var e=Object(f.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getFollowedArtists({limit:50});case 2:a=e.sent,l(a.artists.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){u()}),[]);var o=s.map((function(e){var t=e.images,a=e.name,n=e.type,c=e.id,s=t[0];return r.a.createElement(E,{img:s?s.url:"https://ya-webdesign.com/transparent250_/blank-profile-picture-png-2.png",name:a,tag:n,id:c,key:c})}));return r.a.createElement("div",{id:"libraryArtists"},o)}),S=function(e){var t=e.spotifyWebApi,a=Object(n.useState)([]),c=Object(i.a)(a,2),s=c[0],l=c[1],u=function(){var e=Object(f.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMySavedAlbums({limit:50});case 2:a=e.sent,l(a.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){u()}),[]);var o=s.map((function(e){var t=e.album,a=t.images,n=t.name,c=t.artists,s=t.id;return r.a.createElement(y,{img:a[0].url,name:n,artist:c[0].name,id:s,key:s})}));return r.a.createElement("div",{id:"libraryAlbums"},o)},W=(a(40),function(e){var t=e.spotifyWebApi;return r.a.createElement("div",null,r.a.createElement("div",{id:"library"},r.a.createElement(k,null),r.a.createElement(o.d,null,r.a.createElement(o.a,{exact:!0,from:"/collection",to:"/collection/playlists"}),r.a.createElement(o.b,{path:"/collection/playlists"},r.a.createElement(w,{spotifyWebApi:t})),r.a.createElement(o.b,{path:"/collection/artists"},r.a.createElement(x,{spotifyWebApi:t})),r.a.createElement(o.b,{path:"/collection/albums"},r.a.createElement(S,{spotifyWebApi:t})))))}),T=(a(41),function(e){var t=e.spotifyWebApi,a=Object(n.useState)([]),c=Object(i.a)(a,2),s=c[0],l=c[1],u=function(){var e=Object(f.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getUserPlaylists();case 2:(a=e.sent).items?l(a.items):l([]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){u()}),[]);var o=s.map((function(e){var t=e.name,a=e.id,n="";return n=t.length>13?" "===t[13]?t.slice(0,13)+"...":t.slice(0,14)+"...":t,r.a.createElement(b.c,{to:"/playlist/".concat(a),key:a},n)}));return r.a.createElement("nav",{id:"nav"},r.a.createElement(b.c,{exact:!0,to:"/"},"HOME"),r.a.createElement(b.c,{to:"/collection"},"LIBRARY"),r.a.createElement("h5",null,"Playlists"),r.a.createElement("hr",null),r.a.createElement("div",{className:"navPlaylists"},r.a.createElement(b.c,{to:"/tracks"},"Liked Songs"),o))}),P=a(7),C=a(10),L=function(e){var t=e.track,a=e.context,n=e.position,c=e.spotifyWebApi,s=t.duration_ms,l=t.name,u=t.artists,m=Object(i.a)(u,1)[0].name,b=Object(o.g)().id,y=function(e){var t=Math.floor(e/6e4),a=(e%6e4/1e3).toFixed(0);return t+":"+(a<10?"0":"")+a}(s),v=function(){var e=Object(f.a)(p.a.mark((function e(){var r,s,l,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.getMyDevices();case 3:r=e.sent,s=r.devices,s.every((function(e){return!1===e.is_active}))&&(l=Object(i.a)(s,1),u=l[0],c.transferMyPlayback([u.id])),"album"===a||"playlist"===a?c.play({context_uri:"spotify:".concat(a,":").concat(b),offset:{position:n}}):(console.log(t.id),c.play({uris:["spotify:track:".concat(t.id)]})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"displayTrack",onClick:v},r.a.createElement("div",{className:"displayLeft"},r.a.createElement("p",{className:"songTitle"},l),r.a.createElement("p",{className:"songArtist"},m)),r.a.createElement("div",{className:"displayRight"},r.a.createElement("p",null,y)))},I=(a(15),function(e){var t=e.spotifyWebApi,a=Object(o.g)().id,c=Object(n.useState)([]),s=Object(i.a)(c,2),l=s[0],u=s[1],m=Object(n.useState)(!1),b=Object(i.a)(m,2),y=b[0],v=b[1],d=Object(n.useState)(0),E=Object(i.a)(d,2),O=E[0],j=E[1],g=Object(n.useState)({}),h=Object(i.a)(g,2),k=h[0],N=h[1],A=Object(n.useState)(!1),w=Object(i.a)(A,2),x=w[0],S=w[1],W=function(){var e=Object(f.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAlbumTracks(a,{offset:O,limit:50});case 2:n=e.sent,u([].concat(Object(P.a)(l),Object(P.a)(n.items))),y?j(O+50):(j(51),v(!0));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(C.a)(W);var T=function(){var e=Object(f.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAlbum(a);case 2:n=e.sent,N(n),S(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(Object(n.useEffect)((function(){x&&y||(T(),W())}),[]),x){var I=l.map((function(e,a){var n={track:e,key:a,spotifyWebApi:t,context:"album",position:a};return r.a.createElement(L,n)}));return r.a.createElement("div",{className:"displayTracks"},r.a.createElement("section",{className:"displayInfo"},r.a.createElement("img",{src:k.images[0].url,alt:"album Cover",className:"displayCover"}),r.a.createElement("h1",{className:"displayName"},k.name),r.a.createElement("p",{className:"displayOwner"},k.artists[0].name),r.a.createElement("p",{className:"displayLength"},k.tracks.items.length," SONGS")),r.a.createElement("section",{className:"displayAllTracks"},I))}return r.a.createElement("div",null)}),M=(a(42),function(e){var t=e.spotifyWebApi,a=Object(o.g)().id,c=Object(n.useState)({}),s=Object(i.a)(c,2),l=s[0],u=s[1],m=Object(n.useState)([]),b=Object(i.a)(m,2),v=b[0],d=b[1],E=Object(n.useState)([]),O=Object(i.a)(E,2),j=O[0],g=O[1],h=Object(n.useState)([]),k=Object(i.a)(h,2),N=k[0],A=k[1],w=Object(n.useState)(!1),x=Object(i.a)(w,2),S=x[0],W=x[1],T=Object(n.useState)(!1),I=Object(i.a)(T,2),M=I[0],R=(I[1],Object(n.useState)(0)),_=Object(i.a)(R,2),U=_[0],B=_[1],Y=function(){var e=Object(f.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getArtist(a);case 2:n=e.sent,u(n),W(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(f.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getArtistTopTracks(a,"US");case 2:n=e.sent,d(n.tracks);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(e){var t=[],n=[],r={};if(!M){for(var c=0;c<e.length;c++){var s=e[c],i=s.album_type,l=s.name;s.artists[0].id===a&&("album"===i&&r[l]!==i?(r[l]=i,t.push(s)):"single"===i&&r[l]!==i&&(r[l]=i,n.push(s)))}B(U?U+50:51),A([].concat(Object(P.a)(N),n)),g([].concat(Object(P.a)(j),t))}},F=function(){var e=Object(f.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getArtistAlbums(a,{offset:U,limit:50});case 2:n=e.sent,D(n.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(Object(C.a)(F),Object(n.useEffect)((function(){Y(),G(),F()}),[]),S){var H=v.map((function(e,a){if(a>4)return null;var n={track:e,key:a,spotifyWebApi:t,context:"artist",position:a};return r.a.createElement(L,n)})),J=j.map((function(e){var t=e.images,a=e.name,n=e.artists,c=e.id;return r.a.createElement(y,{img:t[0].url,name:a,artist:n[0].name,id:c,key:c})})),$=N.map((function(e){var t=e.images,a=e.name,n=e.artists,c=e.id;return r.a.createElement(y,{img:t[0].url,name:a,artist:n[0].name,id:c,key:c})}));return r.a.createElement("div",{id:"displayArtist"},r.a.createElement("section",{id:"artistHeader"},r.a.createElement("h1",null,l.name)),r.a.createElement("h2",null,"Top Tracks"),r.a.createElement("section",{id:"artistTop"},H),r.a.createElement("h2",null,"Albums"),r.a.createElement("section",{id:"artistAlbums"},J),r.a.createElement("h2",null,"Singles & EPs"),r.a.createElement("section",{id:"artistSingles"},$))}return r.a.createElement("div",null)}),R=function(e){var t=e.spotifyWebApi,a=Object(o.g)().id,c=Object(n.useState)([]),s=Object(i.a)(c,2),l=s[0],u=s[1],m=Object(n.useState)(!1),b=Object(i.a)(m,2),y=b[0],v=b[1],d=Object(n.useState)(0),E=Object(i.a)(d,2),O=E[0],j=E[1],g=Object(n.useState)({}),h=Object(i.a)(g,2),k=h[0],N=h[1],A=Object(n.useState)(!1),w=Object(i.a)(A,2),x=w[0],S=w[1],W=function(){var e=Object(f.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getPlaylistTracks(a,{offset:O,limit:50});case 2:n=e.sent,u([].concat(Object(P.a)(l),Object(P.a)(n.items))),y?j(O+50):(j(51),v(!0));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(C.a)(W);var T=function(){var e=Object(f.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getPlaylist(a);case 2:n=e.sent,N(n),S(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){x&&y||(T(),W())}),[x]);if(Object(n.useEffect)((function(){S(!1),v(!1),j(0),u([])}),[a]),y&&x){var I=l.map((function(e,a){var n={track:e.track,key:a,spotifyWebApi:t,context:"playlist",position:a};return r.a.createElement(L,n)}));return r.a.createElement("div",{className:"displayTracks"},r.a.createElement("section",{className:"displayInfo"},r.a.createElement("img",{src:k.images[0].url,alt:"Playlist Cover",className:"displayCover"}),r.a.createElement("h1",{className:"displayName"},k.name),r.a.createElement("p",{className:"displayOwner"},k.owner?k.owner.display_name:null),r.a.createElement("p",{className:"displayLength"},k.tracks.total," SONGS")),r.a.createElement("section",{className:"displayAllTracks"},I))}return r.a.createElement("div",null)},_=function(e){var t=e.spotifyWebApi,a=Object(n.useState)([]),c=Object(i.a)(a,2),s=c[0],l=c[1],u=Object(n.useState)(0),o=Object(i.a)(u,2),m=o[0],b=o[1],y=Object(n.useState)(!1),v=Object(i.a)(y,2),d=v[0],E=v[1],O=Object(n.useState)(0),j=Object(i.a)(O,2),g=j[0],h=j[1],k=function(){var e=Object(f.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMySavedTracks({offset:m,limit:50});case 2:a=e.sent,l([].concat(Object(P.a)(s),Object(P.a)(a.items))),d?b(m+50):(b(51),h(a.total),E(!0));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(Object(C.a)(k),Object(n.useEffect)((function(){k()}),[]),d){var N=s.map((function(e,a){var n={track:e.track,key:a,spotifyWebApi:t,context:"library"};return r.a.createElement(L,n)}));return r.a.createElement("div",{className:"displayTracks"},r.a.createElement("section",{className:"displayInfo"},r.a.createElement("img",{src:"https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png",alt:"Playlist Cover",className:"displayCover"}),r.a.createElement("h1",null,"Liked Songs"),r.a.createElement("p",{className:"displayLength"},g," SONGS")),r.a.createElement("section",{className:"displayAllTracks"},N))}return r.a.createElement("div",{className:"displayTracks"})},U=function(e){var t=e.spotifyWebApi,a=Object(n.useState)({}),c=Object(i.a)(a,2),s=c[0],l=c[1],u=function(){var e=Object(f.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMyCurrentPlayingTrack();case 2:(a=e.sent).item?l(a.item):l({});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMyCurrentPlaybackState();case 2:if(!e.sent.is_playing){e.next=6;break}return e.next=6,u();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[s]),r.a.createElement("footer",{className:"playback",onClick:u},r.a.createElement("div",{className:"playbackLeft"},r.a.createElement("p",null,s.name),r.a.createElement("p",null,s.artists?s.artists[0].name:null)))},B=(a(43),new u.a),Y=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],s=function(){for(var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);e=a.exec(n);)t[e[1]]=decodeURIComponent(e[2]);return t}().access_token;return Object(n.useEffect)((function(){s&&(c(!0),B.setAccessToken(s))})),a?r.a.createElement("div",{className:"App"},r.a.createElement(T,{spotifyWebApi:B}),r.a.createElement(U,{spotifyWebApi:B}),r.a.createElement("div",{className:"mainContent"},r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/collection"},r.a.createElement(W,{spotifyWebApi:B})),r.a.createElement(o.b,{path:"/album/:id"},r.a.createElement(I,{spotifyWebApi:B})),r.a.createElement(o.b,{path:"/artist/:id"},r.a.createElement(M,{spotifyWebApi:B})),r.a.createElement(o.b,{path:"/playlist/:id"},r.a.createElement(R,{spotifyWebApi:B})),r.a.createElement(o.b,{path:"/tracks"},r.a.createElement(_,{spotifyWebApi:B})),r.a.createElement(o.b,{exact:!0,path:"/"},r.a.createElement(g,{spotifyWebApi:B}))))):r.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(b.a,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[25,1,2]]]);
//# sourceMappingURL=main.7876c877.chunk.js.map