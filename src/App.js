import React, { Component } from 'react';
import _ from 'underscore';
import parse from 'csv-parse';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.sortBy = this.sortBy.bind(this);
    this.sortByAsc = this.sortByAsc.bind(this);
    this.sortByDesc = this.sortByDesc.bind(this);
    this.state = {
      tracks: this.parseFromCSV()
    }
  }

  parseFromCSV() {
    return require('./tracks.csv') || [];
  }

  sortByAsc(e) {
    this.sortBy(e, false);
  }

  sortByDesc(e) {
    this.sortBy(e, true)
  }

  sortBy(e, descending=true) {
    var field = e.target.dataset.field;
    var tracks = this.state.tracks;

    var sortedTracks = _.sortBy(
      tracks, function(track){
        if (field === 'length') {
          var length = track[field];
          var lengthInSeconds = parseInt(length.split(':')[0]*60 + length.split(':')[1]);
          return lengthInSeconds;
        }
        return track[field];
      }
    );

    if (descending) {
      sortedTracks = sortedTracks.reverse()
    }

    this.setState({
      tracks: sortedTracks
    });
  }

  render() {
    return <div className="app">
      <Controls sortByAsc={this.sortByAsc} sortByDesc={this.sortByDesc} />
      <Tracks tracks={this.state.tracks} />
    </div>
  }
}

class Tracks extends Component {
  render() {
    var displayedTracks = [];
    this.props.tracks.forEach(function(track) {
      displayedTracks.push(<Track track={track} key={track.title} />);
    });
    return (
      <table>
        <tbody>
          { displayedTracks }
        </tbody>
      </table>
    );
  }
}

class Track extends Component {
  render() {
    return (
      <tr>
        <td><img style={{}} src={ this.props.track.artwork } /></td>
        <td><span style={{}}>{ this.props.track.artist }</span></td>
        <td><span style={{color: '#aaa'}}>{ this.props.track.title }</span></td>
        <td><span style={{color: '#ccc'}}>{ this.props.track.length }</span></td>
        <td><span style={{color: '#ccc'}}>{ this.props.track.year }</span></td>
      </tr>
    );
  }
}

class Controls extends Component {
  render() {
    return (
      <div style={{marginBottom: '20'}} className="controls">
        <h4 style={{margin: '20 0 5'}}>Filter the Spring Theory catalogue by:</h4>
        <span className="control-item">
          <span className="control-item-title">artist</span>
          <a className="control-item-link" data-field="artist" onClick={this.props.sortByAsc}>(A-z)</a>
          <a data-field="artist" onClick={this.props.sortByDesc}>(Z-a)</a>
        </span>
        <span className="control-item">
          <span className="control-item-title">title</span>
          <a className="control-item-link" data-field="title" onClick={this.props.sortByAsc}>(A-z)</a>
          <a data-field="title" onClick={this.props.sortByDesc}>(Z-a)</a>
        </span>
        <span className="control-item">
          <span className="control-item-title">bpm</span>
          <a className="control-item-link" data-field="bpm" onClick={this.props.sortByAsc}>&uarr;</a>
          <a data-field="bpm" onClick={this.props.sortByDesc}>&darr;</a>
        </span>
        <span className="control-item">
          <span className="control-item-title">length</span>
          <a className="control-item-link" data-field="length" onClick={this.props.sortByAsc}>&uarr;</a>
          <a data-field="length" onClick={this.props.sortByDesc}>&darr;</a>
        </span>
        <span className="control-item">
          <span className="control-item-title">year</span>
          <a className="control-item-link" data-field="year" onClick={this.props.sortByAsc}>&uarr;</a>
          <a data-field="year" onClick={this.props.sortByDesc}>&darr;</a>
        </span>
      </div>
    )
  }
}
