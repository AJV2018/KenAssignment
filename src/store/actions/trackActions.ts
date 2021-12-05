import { SET_CURRENT_ALBUM, SET_CURRENT_TRACK, SET_PLAYBACK_STATE, SET_TRACKS } from "../types";

export const setTracksAction = (payload) => ({
    type: SET_TRACKS,
    payload
});

export const setCurrentTrackAction = (payload) => ({
    type: SET_CURRENT_TRACK,
    payload
})

export const setPlaybackStateAction = (payload) => ({
    type: SET_PLAYBACK_STATE,
    payload
})

export const setCurrentAlbumAction = (payload) => ({
    type: SET_CURRENT_ALBUM,
    payload
})


