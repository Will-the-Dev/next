import { Dispatch } from 'redux';
import { findRelatedResources } from '@services';
import {
    ActionTypes,
    AddResultsAction,
    ClearResultsAction,
    SetHasErrorAction,
} from './types';

export const loadSearchResults = (
    searchValue: string,
    limit: number,
    clearPreviousResults: boolean
) => async (dispatch: Dispatch) => {
    if (clearPreviousResults) {
        dispatch<ClearResultsAction>({
            type: ActionTypes.ClearResults,
        });
    }
    try {
        const { results } = await findRelatedResources(searchValue, limit);
        dispatch<AddResultsAction>({
            type: ActionTypes.AddResults,
            payload: results,
        });
    } catch (err) {
        dispatch<SetHasErrorAction>({
            type: ActionTypes.SetHasError,
            payload: err,
        });
    }
};
