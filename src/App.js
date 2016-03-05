import React, { Component } from 'react';
import parse from 'csv-parse';
import $ from 'jquery';
import mobile from 'is-mobile';

import DesktopHomePage from './desktop-home-page';
import MobileHomePage from './mobile-home-page';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      releases: this.parseFromCSV(),
      activeRelease: this.parseFromCSV()['st006'],
      selectedRelease: null
    };
    this.onReleaseMouseOver = this.onReleaseMouseOver.bind(this);
    this.onReleaseClick = this.onReleaseClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
  }

  parseFromCSV() {
    return require('./releases.csv').reduce((releasesObj, release) => {
      releasesObj[release.id] = release;
      return releasesObj;
    }, {});
  }

  onReleaseMouseOver(e) {
    this.setState({ activeRelease: this.state.releases[e.currentTarget.dataset.releaseId] });
  }

  onReleaseClick(e) {
    this.setState({ selectedRelease: this.state.releases[e.currentTarget.dataset.releaseId] });
  }

  onBackClick() {
    this.setState({ selectedRelease: null });
  }

  render() {
    if (mobile()) {
      return (
        <MobileHomePage
          releases={this.state.releases} />
      );
    } else {
      return (
        <DesktopHomePage
          releases={this.state.releases}
          activeRelease={this.state.activeRelease}
          selectedRelease={this.state.selectedRelease}
          onReleaseMouseOver={this.onReleaseMouseOver}
          onBackClick={this.onBackClick}
          onReleaseClick={this.onReleaseClick} />
      );
    }
  }
}
