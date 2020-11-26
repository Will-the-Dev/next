import { Box, Avatar, Divider, Typography, Link } from '@material-ui/core';
import { Artist } from '@types';
import React, { FC } from 'react';

export const ArtistCard: FC<Artist> = ({
    artistName,
    primaryGenreName,
    artistLinkUrl,
}) => (
    <Box color="#ccc" component="span" m={1}>
        <Avatar>{artistName[0]}</Avatar>
        <Divider variant="fullWidth" />
        <br />
        <Typography variant="body2" color="textSecondary" component="div">
            <Link href={artistLinkUrl}>
                <p>{artistName}</p>
            </Link>
            <p>{primaryGenreName}</p>
        </Typography>
    </Box>
);
