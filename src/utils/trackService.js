const TrackPlayer = require('react-native-track-player').default;

module.exports = async function () {
  TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());

  TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());

  TrackPlayer.addEventListener('remote-next', () => TrackPlayer.skipToNext());

  TrackPlayer.addEventListener('remote-previous', () => TrackPlayer.skipToPrevious());

  TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());
};
