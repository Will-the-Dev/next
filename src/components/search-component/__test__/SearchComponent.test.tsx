import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { SearchComponent } from '../SearchComponent';

describe('SearchComponent tests', () => {
    it('should render the component to match the snapshot correctly', () => {
        const { asFragment } = render(
            <SearchComponent onChangeText={() => {}} onSubmitForm={() => {}} />
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('should call the submit form callback prop when form is submitted', () => {
        const onSubmitMock = jest.fn();
        const { getByTestId } = render(
            <SearchComponent
                onChangeText={() => {}}
                onSubmitForm={onSubmitMock}
            />
        );

        fireEvent.submit(getByTestId('form'));
        expect(onSubmitMock).toHaveBeenCalled();
    });
});
