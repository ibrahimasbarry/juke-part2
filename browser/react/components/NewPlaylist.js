import React, { Component } from 'react';
import axios from 'axios';

export default class NewPlaylist extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      isDirty: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({inputValue: event.target.value, isDirty: true})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addPlaylist(this.state.inputValue)
    this.setState({inputValue: '', isDirty: false})
  }

  render () {
    let alert = null;
    ((!this.state.inputValue.length && this.state.isDirty)
      || this.state.inputValue.length > 16)
      ? alert = <div className="alert alert-warning">Please enter a name 1-16 characters long</div>
      : alert = <div />

    return (
      <div className="well">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>New Playlist</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input
                  className="form-control"
                  type="text"
                  value={this.state.inputValue}
                  onChange={this.handleChange}
                />
                {alert}
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button
                 type="submit"
                 className="btn btn-success"
                 disabled={!(this.state.inputValue.length && this.state.inputValue.length < 17)} >
                 Create Playlist
                 </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
