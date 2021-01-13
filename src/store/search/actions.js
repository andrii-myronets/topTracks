import { SET_SEARCH_LIST, CLEAR_SEARCH_LIST } from "./types";

export const setSearchList = payload => ({
    type: SET_SEARCH_LIST,
    payload
});

export const clearSearchList = () => ({
    type: CLEAR_SEARCH_LIST,    
});