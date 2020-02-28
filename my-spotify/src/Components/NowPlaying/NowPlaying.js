import React from 'react';

const NowPlaying = ({name, img, handleClick}) => {
    return (
    <div>
        <div> Now Playing: {name} </div>
        <img alt="album" src={ img } style={{width: 100}}/>
        <button onClick={() => handleClick()}>Check Now Playing</button>
    </div>
    )
} // End of NowPlaying Component

export default NowPlaying;