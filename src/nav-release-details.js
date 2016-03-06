import React, { Component } from 'react';

class NavReleaseDetails extends Component {
  render() {
    return (
      <div className="nav__item">
        <div className="nav__link" onClick={this.props.onBackClick}>
          &larr; All Releases
        </div>
        <div className="nav__title">
          <span className="nav__title--main">{this.props.selectedRelease.artist}</span>
          <span className="nav__title--sub">{this.props.selectedRelease.title}</span>
        </div>
        <div className="nav__content">
        </div>
      </div>
    );
  }
}

export default NavReleaseDetails;
