import React, { Component } from 'react';

import NavDesktop from './nav-desktop';
import Hero from './hero';

class DesktopHomePage extends Component {
  getReleaseId () {
    if (this.props.selectedItem) {
      return this.props.selectedItem.id;
    } else {
      return this.props.hoveredItem.id;
    }
  }

  render() {
    return (
      <div>
        <NavDesktop
          media={this.props.media}
          releases={this.props.releases}
          mixes={this.props.mixes}
          hoveredItem={this.props.hoveredItem}
          selectedItem={this.props.selectedItem}
          onItemHover={this.props.onItemHover}
          onBackClick={this.props.onBackClick}
          onReleaseClick={this.props.onReleaseClick} />

        <Hero
          releaseId={this.getReleaseId()} />
      </div>
    );
  }
}

export default DesktopHomePage;
