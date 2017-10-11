import React from 'react';
import Songs from './Songs';
import axios from 'axios';
import AddSongForm from './AddSongForm';

export default class Playlist extends React.Component{

    constructor(){
        super();
        this.state = {
            playlist: {}
        }
        // this.getPlaylist = this.getPlaylist.bind(this);
    }

    getPlaylist(playlistId){
        axios.get(`/api/playlists/${playlistId}`)
        .then(res => res.data)
        .then(playlist => {
            // playlist.songs = playlist.songs.map(convertsong);
            this.setState({ playlist })
        })
    }

    componentDidMount(){
        const playlistId = this.props.match.params.playlistId;
        this.getPlaylist(playlistId);
    }

    componentWillReceiveProps(nextProps){
        const nextPlaylistId = nextProps.match.params.playlistId;
        const currentPlaylistId = this.props.match.params.playlistId;
        if (nextPlaylistId !== currentPlaylistId) {
            this.getPlaylist(nextPlaylistId)
        }
    }

    render(){
        const playlist = this.state.playlist;
        return (
            <div>
            <h3>{ playlist.name }</h3>
            <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
            { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
            <hr />
            <AddSongForm />
          </div>
        )
    }
}
