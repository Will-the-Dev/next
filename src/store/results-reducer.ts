import isEqual from 'lodash.isequal';
import { Actions, ActionTypes, SearchResultsState } from './types';

const initialState: SearchResultsState = {
    isFetchingError: false,
    results: [],
    hasNoMoreResults: false,
};

export function resultsReducer(
    state: SearchResultsState = initialState,
    action: Actions
): SearchResultsState {
    switch (action.type) {
        case ActionTypes.AddResults:
            const filteredResults = action.payload.filter((item) =>
                state.results.every((result) => !isEqual(result, item))
            );
            return {
                isFetchingError: false,
                results: [...state.results, ...filteredResults],
                hasNoMoreResults:
                    action.payload.length > 0 && filteredResults.length === 0,
            };
        case ActionTypes.SetHasError:
            return {
                ...state,
                isFetchingError: action.payload,
            };
        case ActionTypes.ClearResults:
            return {
                ...state,
                results: [],
            };
        default:
            return state;
    }
}
