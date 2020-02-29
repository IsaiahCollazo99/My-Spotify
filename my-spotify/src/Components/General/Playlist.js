import React from 'react';

const Playlist = ({img, name, owner, type, desc}) => {
    if(type === "library") {
        if(owner) {
            return (
                <div className="libraryPlaylist">
                    <img src={img} alt="playlist" className="playlistImg" />
                    <p className="playlistName">{name.length <= 17 ? name : name.slice(0, 17) + "..."}</p>
                    <p className="playlistOwner">By {owner.length <= 17 ? owner : owner.slice(0, 17) + "..."}</p>
                </div>
            )
        } else {
            return (
                <div className="libraryPlaylist">
                    <img src={img} alt="playlist" className="playlistImg" />
                    <p className="playlistName">{name.length <= 17 ? name : name.slice(0, 17) + "..."}</p>
                </div>
            )
        }
        
    } else {
        return (
            <div className="playlist">
                <img src={img} alt="playlist" style={{width: 128}} />
                <p className="playlistName">{name.length <= 17 ? name : name.slice(0, 17) + "..."}</p>
                <p className="playlistOwner">By {owner.length <= 17 ? owner : owner.slice(0, 17) + "..."}</p>
            </div>
        )
    }
        
}

export default Playlist