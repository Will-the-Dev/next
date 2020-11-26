import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useLoadOnScroll } from '@hooks';
import { loadSearchResults } from '../store/actions';
import {
    LoadingIndicator,
    SearchFeedback,
    SearchResults,
    SearchComponent,
} from '@components';
import { AppState } from 'src/store';
import { useSelector } from 'react-redux';

export function Main() {
    const [searchValue, setSearchValue] = useState('');
    const [searchComplete, setSearchComplete] = useState(false);
    const [limitValue, setLimitValue] = useState(10);
    const searchValueRef = useRef('');
    const dispatch = useDispatch();
    const hasNoMoreNewResults = useSelector(
        (state: AppState) => state.searchResults.hasNoMoreResults
    );
    const hasError = useSelector(
        (state: AppState) => state.searchResults.isFetchingError
    );

    function runAfterEachSearch() {
        setSearchComplete(true);
        setIsFetching(false);
        setLimitValue(limitValue + 10);
        searchValueRef.current = searchValue;
    }

    function fetchSearchResults() {
        if (hasNoMoreNewResults) {
            setIsFetching(false);
            return;
        }

        loadSearchResults(
            searchValue,
            limitValue,
            searchValueRef.current !== searchValue
        )(dispatch).then(runAfterEachSearch);
    }

    const [isFetching, setIsFetching] = useLoadOnScroll(fetchSearchResults);

    function handleOnSubmitForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (searchValueRef.current === searchValue) return;
        setIsFetching(true);
    }

    function handleOnTextChange({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) {
        setSearchValue(value);
    }

    return (
        <div>
            <SearchComponent
                onChangeText={handleOnTextChange}
                onSubmitForm={handleOnSubmitForm}
            />
            <SearchResults />
            <LoadingIndicator
                isLoading={isFetching}
                render={() => (
                    <SearchFeedback isSearchComplete={searchComplete} />
                )}
                hasError={hasError}
            />
        </div>
    );
}
