import React, { Component } from 'react';
import parse from 'csv-parse';
import $ from 'jquery';
import useragent from 'express-useragent';

import DesktopNav from './nav-desktop';
import Hero from './hero';

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

  onReleaseMouseOver(e) {
    const releaseId = e.currentTarget.dataset.releaseId;
    this.setState({
      activeRelease: this.state.releases[releaseId]
    });
  }

  onReleaseClick(e) {
    const releaseId = e.currentTarget.dataset.releaseId;
    this.setState({
      selectedRelease: this.state.releases[releaseId]
    });
  }

  onBackClick() {
    this.setState({
      selectedRelease: null
    });
  }

  parseFromCSV() {
    const releasesAsList = require('./releases.csv');
    const releasesAsObject = releasesAsList.reduce((releasesObj, release) => {
      releasesObj[release.id] = release;
      return releasesObj;
    }, {});

    return releasesAsObject;
  }

  render() {
    let releaseId;
    if (this.state.selectedRelease) {
      releaseId = this.state.selectedRelease.id;
    } else {
      releaseId = this.state.activeRelease.id;
    }

    return (
      <div>
        <DesktopNav
          releases={this.state.releases}
          activeRelease={this.state.activeRelease}
          selectedRelease={this.state.selectedRelease}
          onReleaseMouseOver={this.onReleaseMouseOver}
          onBackClick={this.onBackClick}
          onReleaseClick={this.onReleaseClick} />
        <Hero
          releaseId={releaseId} />
      </div>
    );
  }
}
