import { SET_SIGNED, SET_USER } from "../types";

export const setSignedAction = (payload) => ({
    type: SET_SIGNED,
    payload
});

export const setUserAction = (payload) => ({
    type: SET_USER,
    payload
});

