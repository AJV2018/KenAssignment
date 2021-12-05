import { SET_ARTISTS } from "../types"

export default (state = {}, { type, payload }) => {
    switch (type) {
        case SET_ARTISTS:
            return { ...state, ...payload }
        default:
            return state
    }
}
