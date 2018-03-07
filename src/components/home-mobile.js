import React, { Component } from 'react';

import ReleaseDetails from './release-details';
import Artwork from './artwork';
import Links from './links';

const HomeMobile = function(props) {
  const {
    allMedia,
    onBackClick,
    onItemClick,
    releases,
    selectedItemId
  } = props;

  return (
    <div style={styles.content}>
			<img style={styles.logo} src="img/logo.png" />
      <Links />
      {
        !selectedItemId &&
          Object.keys(releases).map(releaseId => {
            const release = releases[releaseId];
            const index = release.id.slice(2);

            return (
              <div
                key={`release-${release.id}`}
                style={styles.releaseContainer}
                data-release-id={release.id}
                onClick={onItemClick}>
                <div style={styles.releaseInfo}>
                  <span style={styles.releaseId}>{index}</span>
                  <div style={styles.releaseArtist}>{release.artist}</div>
                  <div style={styles.releaseTitle}>{release.title}</div>
                </div>
                <Artwork
                  releaseId={releaseId} />
              </div>
            )
          })
      }
      {
        selectedItemId &&
          <ReleaseDetails
            selectedItem={allMedia[selectedItemId]}
            onBackClick={onBackClick} />
      }
		</div>
  );
}

const styles = {
  content: {
    width: '100%',
    float: 'none',
    textAlign: 'center'
  },
  logo: {
    width: '80px',
    height: '58px',
    margin: '20px 0 40px'
  },
  releaseContainer: {
    marginBottom: '60px'
  },
  releaseInfo: {
    marginBottom: '20px'
  },
  releaseId: {
    color: 'rgb(190,190,190)',
    fontSize: '12px',
    fontStyle: 'normal'
  },
  releaseArtist: {
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '600'
  },
  releaseTitle: {
    fontSize: '20px',
    fontStyle: 'italic',
    color: 'rgb(150,150,150)'
  }
};

export default HomeMobile;
