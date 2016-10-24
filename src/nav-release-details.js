import React, { Component } from 'react';
import _ from 'underscore';
import mobile from 'is-mobile';

class NavReleaseDetails extends Component {
  renderMobileImages() {
    if (mobile()) {
      return (
        <div className="artwork-wrapper">
          <div className={`artwork ${this.props.selectedItem.id}`}></div>
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
          src={`https://bandcamp.com/EmbeddedPlayer/album=${this.props.selectedItem.bandcamp_id}/size=small/bgcol=ffffff/linkcol=339999/transparent=true/`}
          seamless>
            <a href="http://spring-theory.bandcamp.com/album/agnys">{this.props.selectedItem.title}</a>
        </iframe>
      </div>
    );
  }

  renderButtons() {
    return (
      <div className="buttons">
        <a href={this.props.selectedItem.buy_url} target="_blank">
          <button>Buy (digital + 12'')</button>
        </a>
      </div>
    );
  }

  renderTracks() {
    const tracks = this.props.selectedItem.tracks;
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
    if (this.props.selectedItem.id.slice(0,2) === 'st') {
      return (
        <div className="nav__link" onClick={this.props.onBackClick}>&larr; All Releases</div>
      );
    } else {
      return (
        <div className="nav__link" onClick={this.props.onBackClick}>&larr; All Mixes</div>
      );
    }
  }

  render() {
    return (
      <div className="nav__item">
        {this.renderBack()}
        <div className="nav__title">
          <span className="nav__title--main">{this.props.selectedItem.artist}</span>
          <span className="nav__title--sub">{this.props.selectedItem.title}</span>
        </div>
        {this.renderPlayer()}
        {this.renderButtons()}
        <div className="tracklist">
          {this.renderTracks()}
        </div>
        {this.renderMobileImages()}
        <div className="credits">
          <p>{`Written and Produced by ${this.props.selectedItem.artist}`}</p>
          <p>{`Artwork by ${this.props.selectedItem.artwork_name}`}</p>
          <p>{`Design by ${this.props.selectedItem.design_name}`}</p>
        </div>
      </div>
    );
  }
}

export default NavReleaseDetails;
