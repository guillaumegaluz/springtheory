import React, { Component } from 'react';
import parse from 'csv-parse';
import $ from 'jquery';

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
        <Nav
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

class Nav extends Component {
  render() {
    let navContent;
    if (this.props.selectedRelease) {
      navContent = (
        <NavReleaseDetails
          selectedRelease={this.props.selectedRelease}
          onBackClick={this.props.onBackClick} />
      );
    } else {
      navContent = (
        <NavReleasesList
          releases={this.props.releases}
          activeRelease={this.props.activeRelease}
          selectedRelease={this.props.selectedRelease}
          onReleaseClick={this.props.onReleaseClick}
          onReleaseMouseOver={this.props.onReleaseMouseOver} />
      )
    }

    return (
      <div className="nav">
  			<div className="nav__container">
  				<img className="nav__logo" src="img/logo.png" />

          {navContent}

          <div className="nav__item">
            <div><a href="mailto:bonjour@spring-theory.com">Get in touch</a></div>
          </div>

  			</div>
  		</div>
    );
  }
}

class NavReleasesList extends Component {
  render() {
    const navContentItems = [];

    for (const releaseId in this.props.releases) {
      const className = (releaseId === this.props.activeRelease.id) ? 'selected' : '';

      navContentItems.push(
        <NavContentItem
          key={releaseId}
          className={className}
          release={this.props.releases[releaseId]}
          onReleaseClick={this.props.onReleaseClick}
          onReleaseMouseOver={this.props.onReleaseMouseOver} />
      );
    }

    return (
      <div className="nav__item">
        <div className="nav__title">
          <span className="nav__title--main">Releases</span>
          <span className="nav__title--sub">latest first</span>
        </div>
        <div className="nav__content">
          {navContentItems}
        </div>
      </div>
    );
  }
}

class NavReleaseDetails extends Component {
  render() {
    return (
      <div className="nav__item">
        <div className="nav__link">
          <div onClick={this.props.onBackClick}>Back to all releases</div>
        </div>
        <div className="nav__title">
          <span className="nav__title--main">{this.props.selectedRelease.artist}</span>
          <span className="nav__title--main">{this.props.selectedRelease.title}</span>
          <span className="nav__title--main">{this.props.selectedRelease.year}</span>
        </div>
        <div className="nav__content">
        </div>
      </div>
    );
  }
}

class NavContentItem extends Component {
  render() {
    return (
      <div
        className={`nav__content--item cursor--e-resize ${this.props.className}`}
        data-release-id={this.props.release.id}
        onClick={this.props.onReleaseClick}
        onMouseOver={this.props.onReleaseMouseOver}>
        <span className="nav__content--wrapper">
          <span className="artist">{this.props.release.artist}</span>
          <span className="release">{this.props.release.title}</span>
        </span>
        <span className="year">{this.props.release.year}</span>
      </div>
    );
  }
}

class Hero extends Component {
  render() {
    return (
      <div className="display">
  			<div className={`hero ${this.props.releaseId}`}></div>
  		</div>
    );
  }
}
