import parse from 'csv-parse';
import _ from 'underscore';

const releases = require('../../data/releases.csv');
const releaseTracks = require('../../data/releases-tracks.csv');
const mixes = require('../../data/mixes.csv');
const mixesTracks = require('../../data/mixes-tracks.csv');

function releasesMappedById() {
  const tracksGroupedByRelease = _.groupBy(releaseTracks, function(releaseTrack){ return releaseTrack.id; });

  return releases.reduce((releasesObj, release) => {
    release['tracks'] = tracksGroupedByRelease[release.id];
    releasesObj[release.id] = release;
    return releasesObj;
  }, {});
}

function mixesMappedById() {
  const tracksGroupedByMix = _.groupBy(mixesTracks, function(releaseTrack){ return releaseTrack.id; });

  return mixes.reduce((mixObj, mix) => {
    mix['tracks'] = tracksGroupedByMix[mix.id];
    mixObj[mix.id] = mix;
    return mixObj;
  }, {});
}

export function getAllMedia() {
  return Object.assign(releasesMappedById(), mixesMappedById());
}

export function getMediaPerType() {
  return {
    releases: releasesMappedById(),
    mixes: mixesMappedById()
  }
}


// this returns an object that looks like:
// {
//   st001: {
//     artist: 'Avalon Emerson',
//     title: 'Church of SoMa',
//     year: '2014',
//     tracks: [
//       {
//         position: 'A1',
//         title: 'Church of SoMa'
//       },
//       ...
//     ],
//   },
//   ...
// }
