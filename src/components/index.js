import React, { Component } from 'react';
import mobile from 'is-mobile';

import {
  getAllMedia,
  getMediaPerType
} from '../lib/data-parser';

import HomeDesktop from './home-desktop';
import HomeMobile from './home-mobile';


export default class App extends Component {
  constructor(props) {
    super(props);
    const mediaPerType = getMediaPerType();
    const allMedia = getAllMedia();
    const releases = mediaPerType['releases'];
    const latestReleaseId = Object.keys(releases)[0];

    this.state = {
      allMedia: allMedia,
      mediaPerType: mediaPerType,
      releases: releases,
      hoveredItemId: latestReleaseId,
      selectedItemId: null,
    };
  }

  onItemHover = (e) => {
    this.setState({
      hoveredItemId: e.currentTarget.dataset.releaseId
    });
  }

  onItemClick = (e) => {
    this.setState({
      selectedItemId: e.currentTarget.dataset.releaseId
    });

    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  onBackClick = () => {
    this.setState({
      selectedItemId: null
    });
  }

  getProps() {
    const {
      allMedia,
      mediaPerType,
      releases,
      selectedItemId,
      hoveredItemId
    } = this.state;

    return {
      allMedia: allMedia,
      mediaPerType: mediaPerType,
      releases: releases,
      selectedItemId: selectedItemId,
      onBackClick: this.onBackClick,
      onItemClick: this.onItemClick,
      hoveredItemId: hoveredItemId,
      onItemHover: this.onItemHover
    }
  }

  render() {
    if (mobile()) {
      return (
        <HomeMobile {...this.getProps()} />
      );
    } else {
      return (
        <HomeDesktop {...this.getProps()} />
      );
    }
  }
}
