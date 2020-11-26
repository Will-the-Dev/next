import React from 'react';
import { render } from '@testing-library/react';

import { Artist } from '@types';
import { ArtistCard } from '../ArtistCard';
import { mockResponse } from '../../../mocks';

const mockArtist = mockResponse.results.find(
    (item) => item.wrapperType === 'artist'
) as Artist;

describe('ArtistCard snapshot test', () => {
    it('should render component to match snapshot', () => {
        const { asFragment } = render(<ArtistCard {...mockArtist} />);

        expect(asFragment()).toMatchSnapshot();
    });
});
