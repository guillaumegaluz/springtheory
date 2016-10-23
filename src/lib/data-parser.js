import parse from 'csv-parse';
import _ from 'underscore';

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

export function getReleasesFromCSV() {
  const releases = require('../../data/releases.csv');
  const tracks = require('../../data/tracks.csv');

  const tracksGroupedByRelease = _.groupBy(tracks, function(track){ return track.id; });

  return releases.reduce((releasesObj, release) => {
    release['tracks'] = tracksGroupedByRelease[release.id];
    releasesObj[release.id] = release;
    return releasesObj;
  }, {});
}

export function getMixesFromCSV() {
  const mixes = require('../../data/mixes.csv');
  return mixes;
  // const tracks = require('../../data/mixes_tracklists.csv');

  // const tracksGroupedByRelease = _.groupBy(tracks, function(track){ return track.id; });
  //
  // return releases.reduce((releasesObj, release) => {
  //   release['tracks'] = tracksGroupedByRelease[release.id];
  //   releasesObj[release.id] = release;
  //   return releasesObj;
  // }, {});
}
