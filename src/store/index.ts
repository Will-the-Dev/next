import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';

import { resultsReducer } from './results-reducer';
import { SearchResultsState } from './types';

export type AppState = {
    searchResults: SearchResultsState;
};

const rootReducer = combineReducers<AppState>({
    searchResults: resultsReducer,
});

function configureStore(): Store<AppState> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}

export const store = configureStore();
