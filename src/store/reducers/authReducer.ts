import { SET_SIGNED, SET_USER } from "../types"

const initialState = {
    signed: false,
    user: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_SIGNED:
            return { ...state, signed: payload }
        case SET_USER:
            return { ...state, user: { ...payload } }
        default:
            return state
    }
}
