import React, { Component } from 'react';

import NavReleaseDetails from './nav-release-details';
import Hero from './hero';

class MobileHomePage extends Component {
  renderRelease(release) {
    return (
      <div
          className="release-container"
          data-release-id={release.id}
          onClick={this.props.onReleaseClick}>
        <div className="release-info">
          <div className="release-info-artist">{release.artist}</div>
          <div className="release-info-title">{release.title}</div>
        </div>
        <div className={`artwork ${release.id}`}></div>
      </div>
    )
  }

  getBody() {
    if (this.props.selectedRelease) {
      return (
        <NavReleaseDetails
          selectedRelease={this.props.selectedRelease}
          onBackClick={this.props.onBackClick} />
      );
    } else {
      const items = [];
      for (const releaseId in this.props.releases) {
        const release = this.props.releases[releaseId];
        items.push(
          this.renderRelease(release)
        );
      }
      return items;
    }
  }

  render() {
    return (
      <div className="nav">
  			<div className="nav_container-mobile">
  				<img className="nav__logo" src="img/logo.png" />
          {this.getBody()}
  			</div>
  		</div>
    );
  }
}

export default MobileHomePage;
