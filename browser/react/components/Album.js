import React, { Component } from 'react';
import axios from 'axios';
import { convertAlbum } from '../utils';
import Songs from '../components/Songs';

export default class Album extends Component {

  constructor () {
    super();
    this.state = {
      album: {}
    };
  }

  componentDidMount () {
    const albumId = this.props.match.params.albumId;

    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => this.setState({
        album: convertAlbum(album)
      }));
  }

  render () {
    const album = this.state.album;

    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs songs={album.songs} />
      </div>
    );
  }
}
