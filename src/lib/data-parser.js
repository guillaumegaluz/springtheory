import _ from 'underscore';

const releases = require('../../data/releases.csv');
const releaseTracks = require('../../data/releases-tracks.csv');

function releasesMappedById() {
  const tracksGroupedByRelease = _.groupBy(releaseTracks, function(releaseTrack){ return releaseTrack.id; });

  return releases.reduce((releasesObj, release) => {
    release['tracks'] = tracksGroupedByRelease[release.id];
    releasesObj[release.id] = release;
    return releasesObj;
  }, {});
}

export function getAllMedia() {
  return Object.assign(releasesMappedById());
}

export function getMediaPerType() {
  return {
    releases: releasesMappedById(),
  }
}
