import React, { Component } from 'react';

export default class NewPlaylist extends Component {
  constructor(){
    super();
    this.state = {
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({inputValue: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.inputValue)
    this.setState({inputValue:''})
  }

  render () {
    return(
      <div className="well">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>New Playlist</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input className="form-control" type="text" value={this.state.inputValue} onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success" disabled={!(this.state.inputValue.length && this.state.inputValue.length < 17)} >Create Playlist</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}