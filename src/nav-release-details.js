import React, { Component } from 'react';

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

export default NavReleaseDetails;
