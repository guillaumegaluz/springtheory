import React, { Component } from 'react';

import NavDesktop from './nav-desktop';
import Hero from './hero';

class DesktopHomePage extends Component {
  getItemId () {
    return this.props.selectedItemId ? this.props.selectedItemId.id : this.props.hoveredItemId;
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
