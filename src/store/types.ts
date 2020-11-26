import { SearchResults } from '@types';

export type SearchResultsState = {
    results: SearchResults;
    isFetchingError: boolean;
    hasNoMoreResults: boolean;
};

export enum ActionTypes {
    AddResults = 'AddResults',
    SetHasError = 'SetHasError',
    ClearResults = 'ClearResults',
}

export type AddResultsAction = {
    readonly type: ActionTypes.AddResults;
    readonly payload: SearchResults;
};

export type SetHasErrorAction = {
    readonly type: ActionTypes.SetHasError;
    readonly payload: boolean;
};

export type ClearResultsAction = {
    readonly type: ActionTypes.ClearResults;
};

export type Actions = SetHasErrorAction | AddResultsAction | ClearResultsAction;
