import { ADD_ALBUMS, RESET_ALBUMS, SET_ALBUMS } from "../types"

export default (state = [], { type, payload }) => {
    switch (type) {

        case SET_ALBUMS:
            return [
                ...payload
            ]
        case ADD_ALBUMS:
            return [
                ...state,
                ...payload
            ]
        case RESET_ALBUMS:
            return []

        default:
            return state
    }
}
