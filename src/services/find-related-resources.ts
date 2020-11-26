import { SearchResponse } from '@types';
import { transport } from '@utils';

export const findRelatedResources = async (
    searchValue: string,
    limit = 10
): Promise<SearchResponse> => {
    const { data } = await transport.get(
        `search?term=${searchValue}&limit=${limit}&entity=musicArtist,album,song`
    );

    return data;
};
