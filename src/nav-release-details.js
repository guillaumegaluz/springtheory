import React, { Component } from 'react';
import _ from 'underscore';
import mobile from 'is-mobile';

class NavReleaseDetails extends Component {
  renderImages(release) {
    if (mobile()) {
      return (
        <div className="artwork-wrapper">
          <div className={`artwork ${release.id}`}></div>
        </div>
      );
    }
  }

  renderPlayer() {
    const style = {
      border: '0',
      width: '70%',
      height: '42px'
    };

    return (
      <div className="player">
        <iframe
          style={style}
          src="https://bandcamp.com/EmbeddedPlayer/album=3143975255/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/"
          seamless>
            <a href="http://spring-theory.bandcamp.com/album/agnys">Agnys by Aria Rostami</a>
        </iframe>
      </div>
    );
  }

  renderButtons() {
    return (
      <div className="buttons">
        <a href={this.props.selectedRelease.buy_url} target="_blank">
          <button>Buy (digital + 12'')</button>
        </a>
      </div>
    );
  }

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

  renderBack() {
    return (
      <div className="nav__link" onClick={this.props.onBackClick}>
        &larr; All Releases
      </div>
    );
  }

  render() {
    return (
      <div className="nav__item">
        {this.renderBack()}
        <div className="nav__title">
          <span className="nav__title--main">{this.props.selectedRelease.artist}</span>
          <span className="nav__title--sub">{this.props.selectedRelease.title}</span>
        </div>
        {this.renderPlayer()}
        {this.renderButtons()}
        <div className="tracklist">
          {this.renderTracks()}
        </div>
        {this.renderImages(this.props.selectedRelease)}
        <div className="credits">
          <p>{`Written and Produced by ${this.props.selectedRelease.artist}`}</p>
          <p>{`Artwork by ${this.props.selectedRelease.artwork_name}`}</p>
          <p>{`Design by ${this.props.selectedRelease.design_name}`}</p>
        </div>
        {this.renderBack()}
      </div>
    );
  }
}

export default NavReleaseDetails;
