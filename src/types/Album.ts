export interface Album {
    type: string;
    id: string;
    upc: string;
    shortcut: string;
    href: string;
    name: string;
    released: string;
    originallyReleased: string;
    label: string;
    copyright: string;
    tags?: (string)[] | null;
    discCount: number;
    trackCount: number;
    isExplicit: boolean;
    isSingle: boolean;
    accountPartner: string;
    artistName: string;
    isAvailableInHiRes: boolean;
    contributingArtists: ContributingArtists;
    discographies: Discographies;
    links: Links;
    isStreamable: boolean;
}
export interface ContributingArtists {
    primaryArtist: string;
}
export interface Discographies {
    others?: (string)[] | null;
    main?: (string)[] | null;
}
export interface Links {
    images: ImagesOrTracksOrPosts;
    tracks: ImagesOrTracksOrPosts;
    posts: ImagesOrTracksOrPosts;
    artists: ArtistsOrGenres;
    genres: ArtistsOrGenres;
}
export interface ImagesOrTracksOrPosts {
    href: string;
}
export interface ArtistsOrGenres {
    ids?: (string)[] | null;
    href: string;
}
