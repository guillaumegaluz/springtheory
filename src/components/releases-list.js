import React, { Component } from 'react';

const ReleasesList = function(props) {
  const {
    releases,
    hoveredItemId,
    onItemClick,
    onItemHover
  } = props;

  return (
    <div>
      <div style={styles.title}>Releases</div>
      {
        Object.keys(releases).map(releaseId => {
          const release = releases[releaseId]
          return (
            <div
              key={releaseId}
              style={styles.row}
              data-release-id={release.id}
              onClick={onItemClick}
              onMouseOver={onItemHover} >
              <span style={releaseId === hoveredItemId ? styles.releaseRowHover : styles.releaseRow}>
                <span style={styles.releaseIndex}>{release.id.slice(2)}</span>
                <span style={styles.releaseArtist}>{release.artist}</span>
                <span style={styles.releaseTitle}>{release.title}</span>
              </span>
            </div>
          )
        })
      }
    </div>
  );
}

const styles = {
  title: {
    fontSize: '2vw',
    fontWeight: 'bold',
    lineHeight: '36px',
    marginBottom: '1.5vh'
  },
  row: {
    fontSize: '1.2vw',
    padding: '0.2vw 0',
  },
  releaseRow: {
    cursor: 'e-resize',
  },
  releaseRowHover: {
    cursor: 'e-resize',
    backgroundColor: 'rgba(51, 153, 153, 0.1)'
  },
  releaseIndex: {
    color: '#ccc',
    fontStyle: 'normal',
    fontWeight: '600',
    marginRight: '1vw'
  },
  releaseArtist: {
    fontStyle: 'normal',
    fontWeight: '600',
    marginRight: '0.5vw'
  },
  releaseTitle: {
    fontStyle: 'italic',
    color: 'rgb(130,130,130)',
    marginRight: '5px'
  }
}

export default ReleasesList;
