import React, { Component } from 'react';

import ReleasesList from './releases-list';
import ReleaseDetails from './release-details';
import Artwork from './artwork';
import Links from './links';

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
        <Links />
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
    width: '100px',
    height: '70px',
    marginBottom: '20px',
    marginLeft: '-5px'
  }
};

export default HomeDesktop;
