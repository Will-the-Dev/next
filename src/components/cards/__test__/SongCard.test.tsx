import React from 'react';
import { render } from '@testing-library/react';

import { Track } from '@types';
import { SongCard } from '../SongCard';
import { mockResponse } from '../../../mocks';

const mockSong = mockResponse.results.find(
    (item) => item.wrapperType === 'track'
) as Track;

describe('SongCard snapshot test', () => {
    it('should render component to match snapshot', () => {
        const { asFragment } = render(<SongCard {...mockSong} />);

        expect(asFragment()).toMatchSnapshot();
    });
});
