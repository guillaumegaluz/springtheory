import React, { Component } from 'react';

import NavContentItem from './nav-content-item';

class NavReleasesList extends Component {
  getNavItems() {
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

    return navContentItems;
  }

  render() {
    return (
      <div className="nav__item">
        <div className="nav__title">
          <span className="nav__title--main">{this.props.title}</span>
        </div>
        <div className="nav__content">
          {this.getNavItems()}
        </div>
      </div>
    );
  }
}

export default NavReleasesList;
