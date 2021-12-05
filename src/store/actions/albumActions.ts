import { ADD_ALBUMS, RESET_ALBUMS, SET_ALBUMS } from "../types";

//APPENDS NEW ALBUMS TO EXISTING ONES
export const addAlbumsAction = (payload) => ({
    type: ADD_ALBUMS,
    payload
})

//CLEARS EXISTING ALBUMS AND REPLACES WITH PAYLOAD
export const setAlbumsAction = (payload) => ({
    type: SET_ALBUMS,
    payload
})

//CLEARS STATE
export const resetAlbumsAction = (payload) => ({
    type: RESET_ALBUMS,
    payload
})
