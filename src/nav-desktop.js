import React, { Component } from 'react';

import NavReleasesList from './nav-releases-list';
import NavReleaseDetails from './nav-release-details';

class DesktopNav extends Component {
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
  			</div>
  		</div>
    );
  }
}

export default DesktopNav;
