import React, { ChangeEvent, FC, FormEvent } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import styled from 'styled-components';

const FindContainer = styled.div`
    margin: 30px auto;
    max-width: 570px;
    z-index: 1;
`;

const FlexRowContainer = styled.div`
    display: flex;
    justify-content: center;

    div:first-child {
        margin-right: 15px;
    }
`;

type Props = {
    onChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmitForm: (e: FormEvent<HTMLFormElement>) => void;
};

export const SearchComponent: FC<Props> = ({ onSubmitForm, onChangeText }) => (
    <FindContainer>
        <form data-testid="form" onSubmit={onSubmitForm}>
            <Typography align="left" color="inherit" variant="h4">
                Search for song, artist or album.
            </Typography>
            <br />
            <FlexRowContainer>
                <TextField
                    type="search"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    color="secondary"
                    onChange={onChangeText}
                    placeholder="search"
                    variant="outlined"
                    fullWidth
                />
                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </FlexRowContainer>
        </form>
    </FindContainer>
);
