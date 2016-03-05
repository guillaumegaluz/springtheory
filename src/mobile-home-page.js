import React, { Component } from 'react';

import Hero from './hero';

class MobileHomePage extends Component {
  renderRelease(release) {
    return (
      <div className="release-container">
        <div className="release-info">
          <div className="release-info-artist">{release.artist}</div>
          <div className="release-info-title">{release.title}</div>
        </div>
        <div className={`artwork ${release.id}`}></div>
      </div>
    )
  }

  render() {
    const items = [];

    for (const releaseId in this.props.releases) {
      const release = this.props.releases[releaseId];
      items.push(
        this.renderRelease(release)
      );
    }

    return (
      <div className="nav">
  			<div className="nav_container-mobile">
  				<img className="nav__logo" src="img/logo.png" />

          {items}

          <div className="nav__item">
            <div><a href="mailto:bonjour@spring-theory.com">Get in touch</a></div>
          </div>

  			</div>
  		</div>
    );
  }
}

export default MobileHomePage;
