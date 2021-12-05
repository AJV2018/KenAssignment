export interface Track {
    type: string;
    id: string;
    index: number;
    disc: number;
    href: string;
    playbackSeconds: number;
    isExplicit: boolean;
    isStreamable: boolean;
    isAvailableInHiRes: boolean;
    name: string;
    isrc: string;
    shortcut: string;
    blurbs?: (null)[] | null;
    artistId: string;
    artistName: string;
    albumName: string;
    formats?: (FormatsEntity)[] | null;
    losslessFormats?: (null)[] | null;
    albumId: string;
    contributors: Contributors;
    links: Links;
    previewURL: string;
}
export interface FormatsEntity {
    type: string;
    bitrate: number;
    name: string;
    sampleBits: number;
    sampleRate: number;
}
export interface Contributors {
    primaryArtist: string;
}
export interface Links {
    artists: ArtistsOrAlbumsOrGenresOrTags;
    albums: ArtistsOrAlbumsOrGenresOrTags;
    genres: ArtistsOrAlbumsOrGenresOrTags;
    tags: ArtistsOrAlbumsOrGenresOrTags;
}
export interface ArtistsOrAlbumsOrGenresOrTags {
    ids?: (string)[] | null;
    href: string;
}
