import React from 'react';

const Track = ({name, img, artist}) => {
    return (
        <div className="track">
            <img src={img} alt="album" className="songCover" />
            <p className="songTitle">{name.length <= 15 ? name : name.slice(0, 15) + "..."}</p>
            <p className="songArtist">{artist.length <= 15 ? artist : artist.slice(0, 15) + "..."}</p>
        </div>
    )
} // End of Track Component

export default Track;