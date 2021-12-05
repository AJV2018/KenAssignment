import { SET_CURRENT_ALBUM, SET_CURRENT_TRACK, SET_PLAYBACK_STATE, SET_TRACKS } from "../types"

const initialState = {
    tracks: [],
    currentTrack: '',
    currentAlbum: {},
    playingState: 0
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_TRACKS:
            return { ...state, tracks: [...payload] }
        case SET_CURRENT_TRACK:
            return { ...state, currentTrack: payload }
        case SET_PLAYBACK_STATE:
            return { ...state, playingState: payload }
        case SET_CURRENT_ALBUM:
            return { ...state, currentAlbum: payload }
        default:
            return state
    }
}
