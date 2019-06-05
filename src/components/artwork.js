import React, { Component } from 'react';

import mobile from 'is-mobile';

const Artwork = function(props) {
  const {
    releaseId
  } = props;

  return (
    <div
      style={mobile() ? mobileStyles.artworkWrapper : desktopStyles.artworkWrapper}
      key={`img-${releaseId}`} >
			<div
        style={{
          background: 'url("img/' + releaseId + '.jpg") no-repeat',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain !important',
          height: mobile() ? '100vw' : '100%',
          width: '100%',
          backgroundSize: mobile() ? 'contain' : 'contain'
        }}>
			</div>
		</div>
  );
}

const desktopStyles = {
  artworkWrapper: {
    display: 'inline-block',
    verticalAlign: 'top',
    width: '51%'
  }
}

const mobileStyles = {
  artworkWrapper: {
    width: '100%',
    float: 'none'
  }
}

export default Artwork;
