import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';
import AllAlbums from './AllAlbums';
import {Route, NavLink} from 'react-router-dom';

export default class SingleArtist extends Component {

      constructor () {
        super();
        this.state = {
          artist: {},
          artistAlbums: [],
          artistSongs: []
        };
      }

      componentDidMount () {
        const artistId = this.props.match.params.artistId;
        Promise.all([
            axios.get(`/api/artists/${artistId}`),
            axios.get(`/api/artists/${artistId}/albums`),
            axios.get(`/api/artists/${artistId}/songs`)
        ])
        .then(([artist, albumsObj, songsObj]) => {
            this.setState({ artist: artist.data, artistAlbums: albumsObj.data, artistSongs: songsObj.data });
        })
      }
      render () {
          const artist = this.state.artist; // or however you've named it
          return (
            <div>
              <h3>{ artist.name }</h3>
              <ul className="nav nav-tabs">
                <li><NavLink to="/artists/:artistId/albums" activeClassName="selected">ALBUMS</NavLink></li>
                <li><NavLink to="/artists/:artistId/songs" activeClassName="selected">SONGS</NavLink></li>
              </ul>
              <Route path="/artists/:artistId/albums" render={() => <AllAlbums albums={this.state.artistAlbums} />} />
              <Route path="/artists/:artistId/songs" render={() => <Songs songs={this.state.artistSongs} />} />
            </div>
          );
        }
    }

