import React, { Component } from 'react';

import NavReleasesList from './nav-releases-list';
import NavReleaseDetails from './nav-release-details';

class NavDesktop extends Component {
  getBody() {
    if (this.props.selectedRelease) {
      return (
        <NavReleaseDetails
          selectedRelease={this.props.selectedRelease}
          onBackClick={this.props.onBackClick} />
      );
    } else {
      return (
        <div>
          <NavReleasesList
            title="Releases"
            releases={this.props.releases}
            activeRelease={this.props.activeRelease}
            selectedRelease={this.props.selectedRelease}
            onReleaseClick={this.props.onReleaseClick}
            onReleaseMouseOver={this.props.onReleaseMouseOver} />

          <NavReleasesList
            title="Mixes"
            releases={this.props.mixes}
            activeRelease={this.props.activeRelease}
            selectedRelease={this.props.selectedRelease}
            onReleaseClick={this.props.onReleaseClick}
            onReleaseMouseOver={this.props.onReleaseMouseOver} />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="nav">
  			<div className="nav__container">
  				<img className="nav__logo" src="img/logo.png" />
          {this.getBody()}
  			</div>
  		</div>
    );
  }
}

export default NavDesktop;
