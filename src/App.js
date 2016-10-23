import React, { Component } from 'react';
import mobile from 'is-mobile';

import {getReleasesFromCSV, getMixesFromCSV} from './lib/data-parser';
import DesktopHomePage from './desktop-home-page';
import MobileHomePage from './mobile-home-page';

export default class App extends Component {
  constructor(props) {
    super(props);
    const releases = getReleasesFromCSV();
    const mixes = getMixesFromCSV();
    const latestReleaseId = Object.keys(releases)[0];

    this.state = {
      releases: releases,
      mixes: mixes,
      activeRelease: releases[latestReleaseId],
      selectedRelease: null
    };

    this.onReleaseMouseOver = this.onReleaseMouseOver.bind(this);
    this.onReleaseClick = this.onReleaseClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
  }

  onReleaseMouseOver(e) {
    this.setState({
      activeRelease: this.state.releases[e.currentTarget.dataset.releaseId]
    });
  }

  onReleaseClick(e) {
    this.setState({
      selectedRelease: this.state.releases[e.currentTarget.dataset.releaseId]
    });

    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  onBackClick() {
    this.setState({
      selectedRelease: null
    });
  }

  render() {
    if (mobile()) {
      return (
        <MobileHomePage
          releases={this.state.releases}
          selectedRelease={this.state.selectedRelease}
          onBackClick={this.onBackClick}
          onReleaseClick={this.onReleaseClick} />
      );
    } else {
      return (
        <DesktopHomePage
          releases={this.state.releases}
          mixes={this.state.mixes}
          selectedRelease={this.state.selectedRelease}
          onBackClick={this.onBackClick}
          onReleaseClick={this.onReleaseClick}

          activeRelease={this.state.activeRelease}
          onReleaseMouseOver={this.onReleaseMouseOver} />
      );
    }
  }
}
