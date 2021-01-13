import { SET_SEARCH_LIST, CLEAR_SEARCH_LIST } from "./types";

export const InitialState = {
    searchList: [], 
}

export function reducer(state = InitialState, { type, payload }) {
    switch (type) {
        case SET_SEARCH_LIST:
            return {
                ...state,
                searchList: payload
            }
        case CLEAR_SEARCH_LIST:
            return {
                ...state,
                searchList: []
            }
        default:
            return state
    }
};