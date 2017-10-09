import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';

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
            axios.get(`/api/artists/${artistId}`)
             // .then(res => res.data)
            //   .then(artist => {
            //     this.setState({artist: artist });
            //   })
             ,
              axios.get(`/api/artists/${artistId}/albums`)
             // .then(res => res.data)
            //   .then(albums => {
            //     this.setState({artistAlbums: albums });
            //   })
              ,
             axios.get(`/api/artists/${artistId}/songs`)
              //.then(res => res.data)
            //   .then(songs => {
            //     this.setState({artistSongs: songs });
             // })
        ])
        //.then(res => res.data)
        .then(data => {
            console.log(data);
        })


      }
      render () {
        const artist = this.state.artist;
        return (
            <div>
            <h3>{artist.name}</h3>
            <h4>ALBUMS</h4>
            <h4>SONGS</h4>
            </div>
        //   <div className="artist">
        //     <div>
        //       <h3>{ artist.name }</h3>
        //       <img src={ artist.imageUrl } className="img-thumbnail" />
        //     </div>
        //     <Songs songs={artist.songs} />
        //   </div>
        );
      }
    }

