import React, { Component } from 'react';

import NavDesktop from './nav-desktop';
import Hero from './hero';

class DesktopHomePage extends Component {
  getReleaseId () {
    if (this.props.selectedRelease) {
      return this.props.selectedRelease.id;
    } else {
      return this.props.activeRelease.id;
    }
  }

  render() {
    return (
      <div>
        <NavDesktop
          releases={this.props.releases}
          mixes={this.props.mixes}
          activeRelease={this.props.activeRelease}
          selectedRelease={this.props.selectedRelease}
          onReleaseMouseOver={this.props.onReleaseMouseOver}
          onBackClick={this.props.onBackClick}
          onReleaseClick={this.props.onReleaseClick} />

        <Hero
          releaseId={this.getReleaseId()} />
      </div>
    );
  }
}

export default DesktopHomePage;
