import React, { Component } from 'react';
import axios from 'axios';

export default class AddSongForm extends Component{
    constructor(){
        super();
        this.state = {
            songs: [],
            songId: 1
        }
        this.handlesChange = this.handlesChange.bind(this);
        this.handlesSubmit = this.handlesSubmit.bind(this);
    }

    componentDidMount(){
        axios.get('/api/songs')
        .then(({data}) => this.setState({ songs: data }))
    }

    handlesChange(event){
        this.setState({songId: event.target.value})
    }

    handlesSubmit(event){
        event.preventDefault();
        const songId = this.state.songId;
        const playlistId = this.props.playlist.id;
        this.props.addSongToPlaylist(playlistId, songId);
        this.setState({
            song: {}
        })
    }


    render(){
        return (
            <div className="well">
            <form className="form-horizontal" noValidate name="songSelect" onSubmit={this.handleSubmit}>
              <fieldset>
                <legend>Add to Playlist</legend>
                <div className="form-group">
                  <label htmlFor="song" className="col-xs-2 control-label">Song</label>
                  <div className="col-xs-10">
                    <select className="form-control" name="song" onChange={this.handleChange}>
                    { this.state.songs.map(song => {
                        return (
                            <option key={song.id} value={song.id}>{song.name}</option>
                        )})
                    }
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-10 col-xs-offset-2">
                    <button type="submit" className="btn btn-success">Add Song</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        )
    }
}
