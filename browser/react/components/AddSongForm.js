import React, { Component } from 'react';
import axios from 'axios';

export default class AddSongForm extends Component{
    constructor(){
        super();
        this.state = {
            song: {}
        }
        this.handlesChange = this.handlesChange.bind(this);
        this.handlesSubmit = this.handlesSubmit.bind(this);
        this.grabSongs = this.grabSongs.bind(this)
    }

    addSongToPlaylist (songId) {
        axios.post('/api/:playlistId/songs', {id: songId})
        .then(res => res.data)
        .then(song => {
            console.log(song)
          this.setState({
            song: song
          })
      });
      }

    handlesChange(event){
        this.setState({song: event.target.value})
    }

    handlesSubmit(event){
        event.preventDefault();
        this.addSongToPlaylist(this.state.song.id);
        this.setState({
            song: {}
        })
    }

    grabSongs(){
        axios.get('/api/songs')
        .then(res => res.data)
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
                    { this.grabSongs.map(song => {
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
