import { SET_ARTIST } from "./types";

export const InitialState = {
    artist: {}, 
}

export function reducer(state = InitialState, { type, payload }) {
    switch (type) {
        case SET_ARTIST:
            return {
                ...state,
                artist: payload
            }
        default:
            return state
    }
};