import React from 'react';
import Navbar from '../Navbar/Navbar';
import './../../css/Library.css';
import Track from '../General/Track';
 
class Library extends React.Component {
    constructor(props) {
       super(props)
       this.tracks = [];
       this.getSavedTracks().then(res => {
           this.tracks = res;
           this.render();
       });
    }

    /**
     * @param {number} offset - number for the offset of the saved track search
     * @return {array} An array of the users saved tracks
    **/
    getSavedTracks = async (offset = 0) => {
        const {spotifyWebApi} = this.props;
        let output = [];
        let next = "";
        let i = 0;

        let res = await spotifyWebApi.getMySavedTracks({offset: offset, limit: 50})  
        output = [...output, ...res.items];
        next = res.next;
        
        if(!next) return output;

        if(offset === 0) i = 51
        else i = 50;

        let newOutput = await this.getSavedTracks(offset + i);
        return [...output, ...newOutput];

    }
    
    render = () => {
        let tracks = this.tracks.map(el => {
            let track = el.track;
            return <Track type="library" name={track.name} artist={track.artists[0].name} img={track.album.images[0].url} width={40} key={track.id}/>
        })
        
        return(
            <div id="library">
                <Navbar />
                <div id="trackList">
                    {tracks}
                </div>
            </div>
        )
    }
    
}

export default Library;