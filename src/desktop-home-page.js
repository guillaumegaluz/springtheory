import React, { Component } from 'react';

import NavDesktop from './nav-desktop';
import Hero from './hero';

class DesktopHomePage extends Component {
  getItemId () {
    if (this.props.selectedItem) {
      return this.props.selectedItem.id;
    } else {
      return this.props.hoveredItem.id;
    }
  }

  render() {
    return (
      <div>
        <NavDesktop {...this.props} />
        <Hero releaseId={this.getItemId()} />
      </div>
    );
  }
}

export default DesktopHomePage;
