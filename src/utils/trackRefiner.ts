import { Track } from "../types/Track";

export const refineApiTracks = (track: Track) => ({
    id: track.id,
    url: track.previewURL, // Load media from the network
    title: track.name,
    artist: track.artistName,
    album: track.albumName,
    genre: '',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: '', // Load artwork from the network
    duration: 30 // Duration in seconds
})