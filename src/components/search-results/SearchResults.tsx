import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
import styled from 'styled-components';
import { AppState } from '../../store';
import { CardRenderer } from './CardRender';

const CardsContainer = styled.div`
    display: flex;
    display: flex;
    flex-direction: column;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    justify-content: center;
    justify-content: center;
    margin: 60px auto;
    max-width: 1200px;
    padding: 0px 14px;
    width: calc(100% - 28px);

    & > * {
        margin: 16px;
    }
`;

export const SearchResults: FC = () => {
    const results = useSelector(
        (state: AppState) => state.searchResults.results
    );

    return (
        <CardsContainer>
            {results.map((result) => (
                <div key={v4()}>
                    <CardRenderer item={result} />
                </div>
            ))}
        </CardsContainer>
    );
};
