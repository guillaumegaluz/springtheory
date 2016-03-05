import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <div className="display">
  			<div className={`hero ${this.props.releaseId}`}></div>
  		</div>
    );
  }
}

export default Hero;
