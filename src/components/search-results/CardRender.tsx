import { Album, Artist, Track } from '@types';
import React, { FC } from 'react';
import { AlbumCard } from '../cards/AlbumCard';

import { ArtistCard } from '../cards/ArtistCard';
import { SongCard } from '../cards/SongCard';

type Props = {
    item: Track | Album | Artist;
};

export const CardRenderer: FC<Props> = ({ item }) => {
    switch (item.wrapperType) {
        case 'artist':
            return <ArtistCard {...item} />;
        case 'collection':
            return <AlbumCard {...item} />;
        case 'track':
            return <SongCard {...item} />;
    }
};
