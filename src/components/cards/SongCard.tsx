import {
    Avatar,
    Typography,
    CardContent,
    CardHeader,
    CardMedia,
    Card,
    createStyles,
    makeStyles,
    Theme,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Track } from '@types';
import React, { FC } from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 0,
            paddingTop: '56.25%',
        },
        avatar: {
            backgroundColor: red[500],
        },
    })
);

export const SongCard: FC<Track> = ({
    artistName,
    primaryGenreName,
    collectionName,
    artworkUrl60,
    artworkUrl100,
    releaseDate,
    trackCount,
    trackNumber,
    country,
    trackName,
    isStreamable,
}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar}>{artistName[0]}</Avatar>
                }
                title={trackName}
                subheader={collectionName}
            />
            <CardMedia
                className={classes.media}
                image={artworkUrl100 || artworkUrl60}
                title={new Date(releaseDate).toLocaleDateString()}
            />
            <CardContent>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="div"
                >
                    <p>{artistName}</p>
                    <p>Genre: {primaryGenreName}</p>
                    <p>Available on streams: {isStreamable}</p>
                    <p>No of songs in Song: {trackCount}</p>
                    <p>Country: {country}</p>
                    <p>Copyright: {trackNumber}</p>
                </Typography>
            </CardContent>
        </Card>
    );
};
