import React, { Component } from 'react';

class Hero extends Component {
  render() {
    const style = {
      background: 'url("img/' + this.props.releaseId + '.jpg") no-repeat',
    };

    return (
      <div className="display">
  			<div className={`hero ${this.props.releaseId}`} style={style}></div>
  		</div>
    );
  }
}

export default Hero;
