import React, { Component } from 'react';

import NavContentItem from './nav-content-item';

class NavReleasesList extends Component {
  getNavItems() {
    const navContentItems = [];

    for (const releaseId in this.props.releases) {
      const className = (releaseId === this.props.hoveredItem.id) ? 'selected' : '';

      navContentItems.push(
        <NavContentItem
          key={releaseId}
          className={className}
          release={this.props.releases[releaseId]}
          onItemClick={this.props.onItemClick}
          onItemHover={this.props.onItemHover} />
      );
    }

    return navContentItems;
  }

  render() {
    const items = this.getNavItems();

    if (items.length === 0) {
      return null;
    }

    return (
      <div className="nav__item">
        <div className="nav__title">
          <span className="nav__title--main">{this.props.title}</span>
        </div>
        <div className="nav__content">
          {items}
        </div>
      </div>
    );
  }
}

export default NavReleasesList;
