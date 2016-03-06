import React, { Component } from 'react';
import _ from 'underscore';

class NavReleaseDetails extends Component {
  renderTracks() {
    const tracks = this.props.selectedRelease.tracks;
    const trackGroupedBySide = _.groupBy(tracks, function(track){ return track.side; });

    let tracksItems = [];

    for (const side in trackGroupedBySide) {
      const sideTracks = trackGroupedBySide[side].map(track => {
        return (
          <div className="track-item">
            <span className="track-title">{track.title}</span>
          </div>
        );
      });

      tracksItems.push(
        <div className="tracklist-side-wrapper">
          <div className="tracklist-side">{side}</div>
          {sideTracks}
        </div>
      );
    }

    return (
      <div>
        {tracksItems}
      </div>
    )
  }

  render() {
    return (
      <div className="nav__item">
        <div className="nav__link" onClick={this.props.onBackClick}>
          &larr; All Releases
        </div>
        <div className="nav__title">
          <span className="nav__title--main">{this.props.selectedRelease.artist}</span>
          <span className="nav__title--sub">{this.props.selectedRelease.title}</span>
        </div>
        <div className="tracklist">
          {this.renderTracks()}
        </div>
        <div className="credits">
          <p>{`Written and Produced by ${this.props.selectedRelease.artist}`}</p>
          <p>{`Artwork by ${this.props.selectedRelease.artwork_name}`}</p>
          <p>{`Design by ${this.props.selectedRelease.design_name}`}</p>
        </div>
      </div>
    );
  }
}

export default NavReleaseDetails;
