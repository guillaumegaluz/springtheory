import React, { Component } from 'react';
import $ from 'jquery';
import mobile from 'is-mobile';

import parseFromCSV from './lib/data-parser';
import DesktopHomePage from './desktop-home-page';
import MobileHomePage from './mobile-home-page';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      releases: parseFromCSV(),
      activeRelease: parseFromCSV()['st007'],
      selectedRelease: null
    };
    this.onReleaseMouseOver = this.onReleaseMouseOver.bind(this);
    this.onReleaseClick = this.onReleaseClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
  }

  onReleaseMouseOver(e) {
    this.setState({ activeRelease: this.state.releases[e.currentTarget.dataset.releaseId] });
  }

  onReleaseClick(e) {
    this.setState({ selectedRelease: this.state.releases[e.currentTarget.dataset.releaseId] });
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  onBackClick() {
    this.setState({ selectedRelease: null });
  }

  render() {
    if (mobile()) {
      return (
        <MobileHomePage
          releases={this.state.releases}
          selectedRelease={this.state.selectedRelease}
          onBackClick={this.onBackClick}
          onReleaseClick={this.onReleaseClick}/>
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
