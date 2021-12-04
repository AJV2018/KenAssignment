import { SET_ALBUMS } from "../types"

export default (state = [], { type, payload }) => {
    switch (type) {

        case SET_ALBUMS:
            return [
                ...state,
                ...payload
            ]

        default:
            return state
    }
}
