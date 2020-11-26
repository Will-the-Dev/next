export interface Music {
    artistId: number;
    artistName: string;
    primaryGenreName: string;
    amgArtistId?: number;
}

export interface Artist extends Music {
    wrapperType: 'artist';
    artistType: string;
    artistLinkUrl: string;
    primaryGenreName: string;
    primaryGenreId: number;
}

export interface Album extends Music {
    wrapperType: 'collection';
    collectionType: string;
    collectionId: number;
    collectionName: string;
    collectionCensoredName: string;
    artistViewUrl: string;
    collectionViewUrl: string;
    artworkUrl60: string;
    artworkUrl100: string;
    collectionPrice: number;
    collectionExplicitness: string;
    trackCount: number;
    copyright: string;
    country: string;
    currency: string;
    releaseDate: string;
    primaryGenreName: string;
}

export interface Track extends Music {
    wrapperType: 'track';
    kind: string;
    collectionId: number;
    trackId: number;
    collectionName: string;
    trackName: string;
    collectionCensoredName: string;
    trackCensoredName: string;
    artistViewUrl: string;
    collectionViewUrl: string;
    trackViewUrl: string;
    previewUrl: string;
    artworkUrl30: string;
    artworkUrl60: string;
    artworkUrl100: string;
    collectionPrice: number;
    trackPrice: number;
    releaseDate: string;
    collectionExplicitness: string;
    trackExplicitness: string;
    discCount: number;
    discNumber: number;
    trackCount: number;
    trackNumber: number;
    trackTimeMillis: number;
    country: string;
    currency: string;
    primaryGenreName: string;
    isStreamable: boolean;
}

export type SearchResults = Array<Track | Album | Artist>;

export interface SearchResponse {
    resultCount: number;
    results: SearchResults;
}
