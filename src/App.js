import React, { Component } from 'react';
import mobile from 'is-mobile';

import {getAllMedia, getMediaPerType} from './lib/data-parser';
import DesktopHomePage from './desktop-home-page';
import MobileHomePage from './mobile-home-page';

// Flags
const MIXES_FLAG = false;

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
      mixes: MIXES_FLAG ? mixes : [],
      hoveredItemId: latestReleaseId,
      selectedItemId: null,
    };

    this.onItemHover = this.onItemHover.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
  }

  onItemHover(e) {
    this.setState({
      hoveredItemId: e.currentTarget.dataset.releaseId
    });
  }

  onItemClick(e) {
    this.setState({
      selectedItemId: e.currentTarget.dataset.releaseId
    });

    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  onBackClick() {
    this.setState({
      selectedItemId: null
    });
  }

  getProps() {
    return {
      allMedia: this.state.allMedia,
      mediaPerType: this.state.mediaPerType,
      releases: this.state.releases,
      mixes: this.state.mixes,
      selectedItemId: this.state.selectedItemId,
      onBackClick: this.onBackClick,
      onItemClick: this.onItemClick,
      hoveredItemId: this.state.hoveredItemId,
      onItemHover: this.onItemHover
    }
  }

  render() {
    if (mobile()) {
      return (
        <MobileHomePage {...this.getProps()} />
      );
    } else {
      return (
        <DesktopHomePage {...this.getProps()} />
      );
    }
  }
}
