import React from 'react';

const Playlist = ({img, name, owner, id}) => {
    if(owner) {
        return (
            <a href={`http://localhost:3000/playlist/${id}`} className="displayAnchor">
                <div className="libraryPlaylist">
                    <img src={img} alt="playlist" className="playlistImg" />
                    <p className="playlistName">{name.length <= 17 ? name : name.slice(0, 17) + "..."}</p>
                    <p className="playlistOwner">By {owner.length <= 17 ? owner : owner.slice(0, 17) + "..."}</p>
                </div>
            </a>
        )
    } else {
        return (
            <div className="libraryPlaylist">
                <img src={img} alt="playlist" className="playlistImg" />
                <p className="playlistName">{name.length <= 17 ? name : name.slice(0, 17) + "..."}</p>
            </div>
        )
    }

}

export default Playlist