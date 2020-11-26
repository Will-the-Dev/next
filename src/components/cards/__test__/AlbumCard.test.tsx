import React from 'react';
import { render } from '@testing-library/react';

import { Album } from '@types';
import { AlbumCard } from '../AlbumCard';
import { mockResponse } from '../../../mocks';

const mockAlbum = mockResponse.results.find(
    (item) => item.wrapperType === 'collection'
) as Album;

describe('AlbumCard snapshot test', () => {
    it('should render component to match snapshot', () => {
        const { asFragment } = render(<AlbumCard {...mockAlbum} />);

        expect(asFragment()).toMatchSnapshot();
    });
});
