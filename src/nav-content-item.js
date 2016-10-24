import React, { Component } from 'react';

class NavContentItem extends Component {
  render() {
    return (
      <div
        className={`nav__content--item cursor--e-resize ${this.props.className}`}
        data-release-id={this.props.release.id}
        onClick={this.props.onReleaseClick}
        onMouseOver={this.props.onItemHover} >
        <span className="nav__content--wrapper">
          <span className="artist">{this.props.release.artist}</span>
          <span className="release">{this.props.release.title}</span>
        </span>
      </div>
    );
  }
}

export default NavContentItem;
