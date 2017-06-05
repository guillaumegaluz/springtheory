import React, { Component } from 'react';

import ReleasesList from './releases-list';
import ReleaseDetails from './release-details';
import Artwork from './artwork';

const HomeDesktop = function(props) {
  const {
    allMedia,
    releases,
    selectedItemId,
    hoveredItemId,
    onBackClick,
    onItemClick,
    onItemHover
  } = props;

  return (
    <div>
      <div style={styles.content}>
				<img src="img/logo.png" style={styles.logo} />
        {
          selectedItemId &&
            <ReleaseDetails
              selectedItem={allMedia[selectedItemId]}
              onBackClick={onBackClick} />
        }
        {
          !selectedItemId &&
            <ReleasesList
              releases={releases}
              hoveredItemId={hoveredItemId}
              onItemClick={onItemClick}
              onItemHover={onItemHover} />
        }
  		</div>
      <Artwork releaseId={selectedItemId || hoveredItemId} />
    </div>
  );
}

const styles = {
  content: {
    display: 'inline-block',
    verticalAlign: 'top',
    width: '44%',
    padding: '40px 0 0 40px',
    height: '100%',
    overflow: 'scroll'
  },
  logo: {
    width: '80px',
    height: '58px',
    marginBottom: '40px'
  }
};

export default HomeDesktop;
