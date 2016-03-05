import React, { Component } from 'react';

class NavContentItem extends Component {
  render() {
    return (
      <div
          className={`nav__content--item cursor--e-resize ${this.props.className}`}
          data-release-id={this.props.release.id}
          onClick={this.props.onReleaseClick}
          onMouseOver={this.props.onReleaseMouseOver} >
        <span className="nav__content--wrapper">
          <span className="artist">{this.props.release.artist}</span>
          <span className="release">{this.props.release.title}</span>
        </span>
        <span className="year">{this.props.release.year}</span>
      </div>
    );
  }
}

export default NavContentItem;
