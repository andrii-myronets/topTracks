import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {MODULE_NAME as tracksModuleName} from './tracks/selectors';
import {reducer as tracksReducer} from './tracks/reducer';

import {MODULE_NAME as artistModuleName} from './artist/selectors';
import {reducer as artistReducer} from './artist/reducer';

import {MODULE_NAME as searchModuleName} from './search/selectors';
import {reducer as searchReducer} from './search/reducer';

const rootReducer = combineReducers({
    [tracksModuleName]: tracksReducer,
    [artistModuleName]: artistReducer,
    [searchModuleName]: searchReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));