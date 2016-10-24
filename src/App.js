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
      selectedItem: null,
    };

    this.onItemHover = this.onItemHover.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
  }

  onItemHover(e) {
    this.setState({
      hoveredItem: this.state.allMedia[e.currentTarget.dataset.releaseId]
    });
  }

  onItemClick(e) {
    this.setState({
      selectedItem: this.state.allMedia[e.currentTarget.dataset.releaseId]
    });

    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  onBackClick() {
    this.setState({
      selectedItem: null
    });
  }

  render() {
    if (mobile()) {
      return (
        <MobileHomePage
          media={this.state.mediaPerType}
          releases={this.state.releases}
          mixes={this.state.mixes}
          selectedItem={this.state.selectedItem}
          onBackClick={this.onBackClick}
          onItemClick={this.onItemClick} />
      );
    } else {
      return (
        <DesktopHomePage
          media={this.state.mediaPerType}
          releases={this.state.releases}
          mixes={this.state.mixes}
          selectedItem={this.state.selectedItem}
          onBackClick={this.onBackClick}
          onItemClick={this.onItemClick}

          hoveredItem={this.state.hoveredItem}
          onItemHover={this.onItemHover} />
      );
    }
  }
}
