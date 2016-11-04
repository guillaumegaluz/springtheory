import React, { Component } from 'react';

import NavReleaseDetails from './nav-release-details';

class MobileHomePage extends Component {
  renderRelease(release) {
    const style = {
      background: 'url("img/' + release.id + '.jpg")'
    };

    return (
      <div
          className="release-container"
          data-release-id={release.id}
          onClick={this.props.onItemClick}>
        <div className="release-info">
          <div className="release-info-artist">{release.artist}</div>
          <div className="release-info-title">{release.title}</div>
        </div>
        <div className="artwork" style={style}></div>
      </div>
    )
  }

  getBody() {
    if (this.props.selectedItemId) {
      const selectedItem = this.props.allMedia[this.props.selectedItemId];

      return (
        <NavReleaseDetails
          selectedItem={selectedItem}
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
