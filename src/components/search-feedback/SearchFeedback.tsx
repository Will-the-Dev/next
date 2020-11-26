import { Container, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { AppState } from '../../store';
import { useSelector } from 'react-redux';

type Props = {
    isSearchComplete: boolean;
};

export const SearchFeedback: FC<Props> = ({ isSearchComplete }) => {
    const hasNoMoreNewResults = useSelector(
        (state: AppState) => state.searchResults.hasNoMoreResults
    );

    const hasNoResults = useSelector(
        (state: AppState) => state.searchResults.results.length === 0
    );

    return (
        <Container>
            {hasNoResults && isSearchComplete && (
                <Typography>No Results Found</Typography>
            )}
            {hasNoMoreNewResults && (
                <Typography>No more results. Search completed.</Typography>
            )}
        </Container>
    );
};
