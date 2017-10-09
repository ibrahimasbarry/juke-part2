import React from 'react';

export default class AllAlbums extends React.Component {
  render(){
      return (
        <div className="col-xs-10">
        <h3>Albums</h3>
        <div className="row">
        {this.props.albums.map((ele) =>
            (<div key={ele.id} className="col-xs-4">
                <a className="thumbnail" href="#">
                    <img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=ALBUMoneIMAGE&w=300&h=300" />
                    <div className="caption">
                        <h5>
                            <span>{ele.name}</span>
                        </h5>
                        <small>{ele.songs.length + ' songs'}</small>
                    </div>
                </a>
            </div>)

        )}
        </div>
        </div>
      );}
    }
