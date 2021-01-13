import { SET_TRACKS } from "./types";

export const InitialState = {
    topTracks: [],
 
}

export function reducer(state = InitialState, { type, payload }) {
    switch (type) {       
        case SET_TRACKS:
            return {
                ...state,
                topTracks: payload,               
            }
        default:
            return state
    }
};