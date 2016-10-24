import React, { Component } from 'react';
import mobile from 'is-mobile';

import {getAllMedia, getMediaPerType} from './lib/data-parser';
import DesktopHomePage from './desktop-home-page';
import MobileHomePage from './mobile-home-page';

export default class App extends Component {
  constructor(props) {
    super(props);
    const mediaPerType = getMediaPerType();
    const allMedia = getAllMedia();
    const releases = mediaPerType['releases'];
    const mixes = mediaPerType['mixes'];
    const latestReleaseId = Object.keys(releases)[0];

    this.state = {
      allMedia: allMedia,
      mediaPerType: mediaPerType,
      releases: releases,
      mixes: mixes,
      hoveredItem: releases[latestReleaseId],
      selectedRelease: null
    };

    this.onReleaseMouseOver = this.onReleaseMouseOver.bind(this);
    this.onReleaseClick = this.onReleaseClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
  }

  onReleaseMouseOver(e) {
    this.setState({
      hoveredItem: this.state.allMedia[e.currentTarget.dataset.releaseId]
    });
  }

  onReleaseClick(e) {
    this.setState({
      selectedRelease: this.state.allMedia[e.currentTarget.dataset.releaseId]
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
          media={this.state.mediaPerType}
          releases={this.state.releases}
          mixes={this.state.mixes}
          selectedRelease={this.state.selectedRelease}
          onBackClick={this.onBackClick}
          onReleaseClick={this.onReleaseClick}

          hoveredItem={this.state.hoveredItem}
          onReleaseMouseOver={this.onReleaseMouseOver} />
      );
    }
  }
}
