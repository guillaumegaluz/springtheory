import React, { Component } from 'react';

import NavReleasesList from './nav-releases-list';
import NavReleaseDetails from './nav-release-details';

class NavDesktop extends Component {
  getReleases() {
    return (
      <NavReleasesList
        title="Releases"
        releases={this.props.releases}
        hoveredItemId={this.props.hoveredItemId}
        onItemClick={this.props.onItemClick}
        onItemHover={this.props.onItemHover} />
    );
  }

  getMixes() {
    return (
      <NavReleasesList
        title="Mixes"
        releases={this.props.mixes}
        hoveredItemId={this.props.hoveredItemId}
        onItemClick={this.props.onItemClick}
        onItemHover={this.props.onItemHover} />
    )
  }

  getBody() {
    if (this.props.selectedItemId) {
      const selectedItem = this.props.allMedia[this.props.selectedItemId];

      return (
        <NavReleaseDetails
          selectedItem={selectedItem}
          onBackClick={this.props.onBackClick} />
      );
    } else {
      return (
        <div>
          {this.getReleases()}
          {this.getMixes()}
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
