import React, { Component } from 'react';
import _ from 'underscore';
import mobile from 'is-mobile';

import Artwork from './artwork';

const ReleaseDetails = function(props) {
  const {
    selectedItem,
    onBackClick
  } = props;

  const tracks = selectedItem.tracks;
  const trackGroupedBySide = _.groupBy(tracks, function(track){ return track.side; });
  const playerWidth = mobile() ? '70%' : '400px';

  return (
    <div>
      <div style={styles.backLink} onClick={onBackClick}>&larr; All Releases</div>
      <div style={styles.artist}>{selectedItem.artist}</div>
      <div style={styles.title}>{selectedItem.title}</div>
      <iframe
        style={{border: '0', width: playerWidth, height: '42px'}}
        src={`https://bandcamp.com/EmbeddedPlayer/album=${selectedItem.bandcamp_id}/size=small/bgcol=ffffff/linkcol=339999/transparent=true/`}
        seamless>
          <a href="http://spring-theory.bandcamp.com/album/agnys">{selectedItem.title}</a>
      </iframe>
      <div style={styles.buttonsWrapper}>
        <a href={selectedItem.buy_url} target="_blank">
          <button style={styles.button}>Buy (digital + 12'')</button>
        </a>
      </div>
      <div style={styles.tracklist}>
        {
          Object.keys(trackGroupedBySide).map(side => {
            return (
              <div style={styles.tracklistSideWrapper} key={side}>
                <div style={styles.tracklistSide}>{side}</div>
                {
                  trackGroupedBySide[side].map(track => {
                    return (
                      <div style={styles.trackItem} key={`${track.id}-${track.side}${track.position}`}>
                        <span>{track.title}</span>
                      </div>
                    );
                  })
                }
              </div>
            );
          })
        }
      </div>
      {
        mobile() &&
          <Artwork releaseId={selectedItem.id} />
      }
      <div style={styles.creditsWrapper}>
        <div style={styles.credits}>{`Written and Produced by ${selectedItem.artist}`}</div>
        <div style={styles.credits}>{`Artwork by ${selectedItem.artwork_name}`}</div>
        <div style={styles.credits}>{`Design by ${selectedItem.design_name}`}</div>
      </div>
    </div>
  );
}

const styles = {
  backLink: {
    fontSize: '20px',
    color: 'rgba(51, 153, 153, 0.7)',
    marginBottom: '40px',
    cursor: 'w-resize',
  },
  artist: {
    fontSize: '30px',
    fontWeight: 'bold',
    lineHeight: '36px'
  },
  title: {
    fontSize: '30px',
    fontStyle: 'italic',
    color: '#bbb'
  },
  artworkWrapper: {
    marginBottom: '40px'
  },
  tracklist: {
    marginBottom: '20px'
  },
  trackItem: {
    fontSize: '16px',
    fontStyle: 'normal'
  },
  tracklistSideWrapper: {
    marginBottom: '10px'
  },
  tracklistSide: {
    fontStyle: 'italic',
    color: '#bbb'
  },
  creditsWrapper: {
    margin: '40px 0 20px 0'
  },
  credits: {
    fontSize: '12px',
    margin: 0
  },
  buttonsWrapper: {
    margin: '20px 0'
  },
  button: {
    border: 'rgba(51, 153, 153, 0.6)',
    backgroundColor: 'rgba(51, 153, 153, 0.6)',
    color: 'white',
    borderRadius: '2px',
    padding: '6px 10px',
    textAlign: 'center',
    cursor: 'pointer'
  }
}

export default ReleaseDetails;
