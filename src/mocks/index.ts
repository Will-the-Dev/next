import { SearchResponse } from '@types';

export const mockResponse: SearchResponse = {
    resultCount: 10,
    results: [
        {
            wrapperType: 'artist',
            artistType: 'Artist',
            artistName: 'HELLO',
            artistLinkUrl:
                'https://music.apple.com/us/artist/hello/68212324?uo=4',
            artistId: 68212324,
            amgArtistId: 18206,
            primaryGenreName: 'Pop',
            primaryGenreId: 14,
        },
        {
            wrapperType: 'artist',
            artistType: 'Artist',
            artistName: 'HELLO',
            artistLinkUrl:
                'https://music.apple.com/us/artist/hello/1487485291?uo=4',
            artistId: 1487485291,
            primaryGenreName: 'Pop',
            primaryGenreId: 14,
        },
        {
            wrapperType: 'track',
            kind: 'song',
            artistId: 68212324,
            collectionId: 211319791,
            trackId: 211320329,
            artistName: 'HELLO',
            collectionName: 'The Glam Singles Collection',
            trackName: 'New York Groove',
            collectionCensoredName: 'The Glam Singles Collection',
            trackCensoredName: 'New York Groove',
            artistViewUrl:
                'https://music.apple.com/us/artist/hello/68212324?uo=4',
            collectionViewUrl:
                'https://music.apple.com/us/album/new-york-groove/211319791?i=211320329&uo=4',
            trackViewUrl:
                'https://music.apple.com/us/album/new-york-groove/211319791?i=211320329&uo=4',
            previewUrl:
                'https://audio-ssl.itunes.apple.com/itunes-assets/Music/v4/dc/28/a2/dc28a2fa-a728-5d19-79bc-58cc6c8ac413/mzaf_6521679005047017680.plus.aac.p.m4a',
            artworkUrl30:
                'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/d1/13/64/d113640a-3ca5-2d08-6fc0-7fa06fc12fc8/source/30x30bb.jpg',
            artworkUrl60:
                'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/d1/13/64/d113640a-3ca5-2d08-6fc0-7fa06fc12fc8/source/60x60bb.jpg',
            artworkUrl100:
                'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/d1/13/64/d113640a-3ca5-2d08-6fc0-7fa06fc12fc8/source/100x100bb.jpg',
            collectionPrice: 9.99,
            trackPrice: 0.99,
            releaseDate: '1999-11-01T12:00:00Z',
            collectionExplicitness: 'notExplicit',
            trackExplicitness: 'notExplicit',
            discCount: 1,
            discNumber: 1,
            trackCount: 24,
            trackNumber: 13,
            trackTimeMillis: 165387,
            country: 'USA',
            currency: 'USD',
            primaryGenreName: 'Rock',
            isStreamable: true,
        },
        {
            wrapperType: 'track',
            kind: 'song',
            artistId: 262836961,
            collectionId: 1051394208,
            trackId: 1051394215,
            artistName: 'Adele',
            collectionName: '25',
            trackName: 'Hello',
            collectionCensoredName: '25',
            trackCensoredName: 'Hello',
            artistViewUrl:
                'https://music.apple.com/us/artist/adele/262836961?uo=4',
            collectionViewUrl:
                'https://music.apple.com/us/album/hello/1051394208?i=1051394215&uo=4',
            trackViewUrl:
                'https://music.apple.com/us/album/hello/1051394208?i=1051394215&uo=4',
            previewUrl:
                'https://audio-ssl.itunes.apple.com/itunes-assets/Music6/v4/68/34/f1/6834f1f8-8fdb-4247-492a-c0caea580082/mzaf_3920281300599106672.plus.aac.p.m4a',
            artworkUrl30:
                'https://is5-ssl.mzstatic.com/image/thumb/Music6/v4/8c/91/5d/8c915d9b-d9e4-f735-1b91-81ca1b6e6312/source/30x30bb.jpg',
            artworkUrl60:
                'https://is5-ssl.mzstatic.com/image/thumb/Music6/v4/8c/91/5d/8c915d9b-d9e4-f735-1b91-81ca1b6e6312/source/60x60bb.jpg',
            artworkUrl100:
                'https://is5-ssl.mzstatic.com/image/thumb/Music6/v4/8c/91/5d/8c915d9b-d9e4-f735-1b91-81ca1b6e6312/source/100x100bb.jpg',
            collectionPrice: 10.99,
            trackPrice: 1.29,
            releaseDate: '2015-10-23T12:00:00Z',
            collectionExplicitness: 'notExplicit',
            trackExplicitness: 'notExplicit',
            discCount: 1,
            discNumber: 1,
            trackCount: 11,
            trackNumber: 1,
            trackTimeMillis: 295502,
            country: 'USA',
            currency: 'USD',
            primaryGenreName: 'Pop',
            isStreamable: true,
        },
        {
            wrapperType: 'track',
            kind: 'song',
            artistId: 68212324,
            collectionId: 1512789299,
            trackId: 1512790740,
            artistName: 'HELLO',
            collectionName: 'Hello: The Albums',
            trackName: 'New York Groove (Demo)',
            collectionCensoredName: 'Hello: The Albums',
            trackCensoredName: 'New York Groove (Demo)',
            artistViewUrl:
                'https://music.apple.com/us/artist/hello/68212324?uo=4',
            collectionViewUrl:
                'https://music.apple.com/us/album/new-york-groove-demo/1512789299?i=1512790740&uo=4',
            trackViewUrl:
                'https://music.apple.com/us/album/new-york-groove-demo/1512789299?i=1512790740&uo=4',
            previewUrl:
                'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/1c/51/8a/1c518ac7-985c-67eb-e4db-47c7ae2dd94f/mzaf_10183652957354005924.plus.aac.p.m4a',
            artworkUrl30:
                'https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/5c/0f/62/5c0f6214-a970-c6a2-591b-61958a8459a6/source/30x30bb.jpg',
            artworkUrl60:
                'https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/5c/0f/62/5c0f6214-a970-c6a2-591b-61958a8459a6/source/60x60bb.jpg',
            artworkUrl100:
                'https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/5c/0f/62/5c0f6214-a970-c6a2-591b-61958a8459a6/source/100x100bb.jpg',
            collectionPrice: 14.99,
            trackPrice: 1.29,
            releaseDate: '2016-10-28T12:00:00Z',
            collectionExplicitness: 'notExplicit',
            trackExplicitness: 'notExplicit',
            discCount: 4,
            discNumber: 4,
            trackCount: 16,
            trackNumber: 10,
            trackTimeMillis: 178773,
            country: 'USA',
            currency: 'USD',
            primaryGenreName: 'Rock',
            isStreamable: true,
        },
        {
            wrapperType: 'track',
            kind: 'song',
            artistId: 68212324,
            collectionId: 211319791,
            trackId: 211319962,
            artistName: 'HELLO',
            collectionName: 'The Glam Singles Collection',
            trackName: 'Tell Him',
            collectionCensoredName: 'The Glam Singles Collection',
            trackCensoredName: 'Tell Him',
            artistViewUrl:
                'https://music.apple.com/us/artist/hello/68212324?uo=4',
            collectionViewUrl:
                'https://music.apple.com/us/album/tell-him/211319791?i=211319962&uo=4',
            trackViewUrl:
                'https://music.apple.com/us/album/tell-him/211319791?i=211319962&uo=4',
            previewUrl:
                'https://audio-ssl.itunes.apple.com/itunes-assets/Music/v4/ac/4b/4d/ac4b4d16-cb6c-ba7a-5dda-65848bfc45d9/mzaf_1352755825409858522.plus.aac.p.m4a',
            artworkUrl30:
                'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/d1/13/64/d113640a-3ca5-2d08-6fc0-7fa06fc12fc8/source/30x30bb.jpg',
            artworkUrl60:
                'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/d1/13/64/d113640a-3ca5-2d08-6fc0-7fa06fc12fc8/source/60x60bb.jpg',
            artworkUrl100:
                'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/d1/13/64/d113640a-3ca5-2d08-6fc0-7fa06fc12fc8/source/100x100bb.jpg',
            collectionPrice: 9.99,
            trackPrice: 0.99,
            releaseDate: '2001-04-03T12:00:00Z',
            collectionExplicitness: 'notExplicit',
            trackExplicitness: 'notExplicit',
            discCount: 1,
            discNumber: 1,
            trackCount: 24,
            trackNumber: 7,
            trackTimeMillis: 188627,
            country: 'USA',
            currency: 'USD',
            primaryGenreName: 'Rock',
            isStreamable: true,
        },
        {
            wrapperType: 'track',
            kind: 'song',
            artistId: 1452283196,
            collectionId: 1506975477,
            trackId: 1506975770,
            artistName: 'HELLO',
            collectionName: '2011',
            trackName: 'Hello (English Rock Version)',
            collectionCensoredName: '2011',
            trackCensoredName: 'Hello (English Rock Version)',
            artistViewUrl:
                'https://music.apple.com/us/artist/hello/1452283196?uo=4',
            collectionViewUrl:
                'https://music.apple.com/us/album/hello-english-rock-version/1506975477?i=1506975770&uo=4',
            trackViewUrl:
                'https://music.apple.com/us/album/hello-english-rock-version/1506975477?i=1506975770&uo=4',
            previewUrl:
                'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/3b/54/d7/3b54d71f-71e7-dd03-a8f4-b2de1e342d94/mzaf_10682306052640325102.plus.aac.p.m4a',
            artworkUrl30:
                'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/b3/73/43/b373436b-b50c-24c6-48bc-a8af9c621cf8/source/30x30bb.jpg',
            artworkUrl60:
                'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/b3/73/43/b373436b-b50c-24c6-48bc-a8af9c621cf8/source/60x60bb.jpg',
            artworkUrl100:
                'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/b3/73/43/b373436b-b50c-24c6-48bc-a8af9c621cf8/source/100x100bb.jpg',
            collectionPrice: 11.99,
            trackPrice: 1.29,
            releaseDate: '2020-04-09T12:00:00Z',
            collectionExplicitness: 'notExplicit',
            trackExplicitness: 'notExplicit',
            discCount: 1,
            discNumber: 1,
            trackCount: 16,
            trackNumber: 16,
            trackTimeMillis: 208065,
            country: 'USA',
            currency: 'USD',
            primaryGenreName: 'Pop',
            isStreamable: true,
        },
        {
            wrapperType: 'collection',
            collectionType: 'Album',
            artistId: 68212324,
            collectionId: 211319791,
            amgArtistId: 18206,
            artistName: 'HELLO',
            collectionName: 'The Glam Singles Collection',
            collectionCensoredName: 'The Glam Singles Collection',
            artistViewUrl:
                'https://music.apple.com/us/artist/hello/68212324?uo=4',
            collectionViewUrl:
                'https://music.apple.com/us/album/the-glam-singles-collection/211319791?uo=4',
            artworkUrl60:
                'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/d1/13/64/d113640a-3ca5-2d08-6fc0-7fa06fc12fc8/source/60x60bb.jpg',
            artworkUrl100:
                'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/d1/13/64/d113640a-3ca5-2d08-6fc0-7fa06fc12fc8/source/100x100bb.jpg',
            collectionPrice: 9.99,
            collectionExplicitness: 'notExplicit',
            trackCount: 24,
            copyright: "℗ 2007 7T's RECORDS",
            country: 'USA',
            currency: 'USD',
            releaseDate: '2007-02-05T08:00:00Z',
            primaryGenreName: 'Rock',
        },
        {
            wrapperType: 'collection',
            collectionType: 'Album',
            artistId: 68212324,
            collectionId: 1512789299,
            amgArtistId: 18206,
            artistName: 'HELLO',
            collectionName: 'Hello: The Albums',
            collectionCensoredName: 'Hello: The Albums',
            artistViewUrl:
                'https://music.apple.com/us/artist/hello/68212324?uo=4',
            collectionViewUrl:
                'https://music.apple.com/us/album/hello-the-albums/1512789299?uo=4',
            artworkUrl60:
                'https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/5c/0f/62/5c0f6214-a970-c6a2-591b-61958a8459a6/source/60x60bb.jpg',
            artworkUrl100:
                'https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/5c/0f/62/5c0f6214-a970-c6a2-591b-61958a8459a6/source/100x100bb.jpg',
            collectionPrice: 14.99,
            collectionExplicitness: 'notExplicit',
            trackCount: 74,
            copyright: '℗ 2016 7Ts Records',
            country: 'USA',
            currency: 'USD',
            releaseDate: '2016-10-28T07:00:00Z',
            primaryGenreName: 'Rock',
        },
        {
            wrapperType: 'collection',
            collectionType: 'Album',
            artistId: 1452283196,
            collectionId: 1506975477,
            artistName: 'HELLO',
            collectionName: '2011',
            collectionCensoredName: '2011',
            artistViewUrl:
                'https://music.apple.com/us/artist/hello/1452283196?uo=4',
            collectionViewUrl:
                'https://music.apple.com/us/album/2011/1506975477?uo=4',
            artworkUrl60:
                'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/b3/73/43/b373436b-b50c-24c6-48bc-a8af9c621cf8/source/60x60bb.jpg',
            artworkUrl100:
                'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/b3/73/43/b373436b-b50c-24c6-48bc-a8af9c621cf8/source/100x100bb.jpg',
            collectionPrice: 11.99,
            collectionExplicitness: 'notExplicit',
            trackCount: 16,
            copyright: '℗ 2011 One & One Music',
            country: 'USA',
            currency: 'USD',
            releaseDate: '2020-04-09T07:00:00Z',
            primaryGenreName: 'Pop',
        },
    ],
};
