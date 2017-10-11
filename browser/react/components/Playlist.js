import React from 'react';
import Songs from './Songs';
import axios from 'axios';

export default class Playlist extends React.Component{

    constructor(){
        super();
        this.state = {
            playlist: {}
        }
    }

    componentDidMount(){
        const playlistId = this.props.match.params.playlistId;
        axios.get(`/api/playlists/${playlistId}`)
        .then(res => res.data)
        .then(playlist => {
            this.setState({ playlist })
        })
    }

    render(){
        console.log(this.state.playlist)
        const playlist = this.state.playlist;
        return (
            <div>
            <h3>{ playlist.name }</h3>
            <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
            { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
            <hr />
          </div>
        )
    }
}
