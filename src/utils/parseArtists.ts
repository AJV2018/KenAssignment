import { Album } from "../types/Album";
import { Track } from "../types/Track";

export const parseNewArtists = (albums: Album[], savedArtists: Object) => {
    let newArtists = []
    for (let album of albums) {
        const cArtists = album.contributingArtists || {}
        Object.keys(cArtists).map(key => {
            newArtists = [
                ...newArtists,
                ...cArtists[key].split(',')
            ]
        })
    }
    const uniqueArtists = [...new Set([...newArtists])]
    let finalArtists = uniqueArtists.filter(itm => !savedArtists[itm])
    return finalArtists.join(',')

}

export const parseArtistsArr = (artists: any[]) => {
    const newArtists = {}
    for (let artist of artists) {
        newArtists[artist.id] = artist.name
    }
    return { ...newArtists }

}
export const getArtistsFromAlbum = (album: Album, artists: Object) => {
    const cArtists = album.contributingArtists || {}
    let artistArr = []
    Object.keys(cArtists).map(key => {
        cArtists[key].split(',').forEach(key => {
            artistArr = [
                ...artistArr,
                artists[key]
            ]
        })
    })

    return [...new Set([...artistArr])].join(',  ')
}
export const getArtistsFromTrack = (track: Track, artists: Object) => {
    const cArtists = track.contributors || {}
    let artistArr = []
    Object.keys(cArtists).map(key => {
        cArtists[key].split(',').forEach(key => {
            if (artists[key]?.length) {
                artistArr = [
                    ...artistArr,
                    artists[key]
                ]
            }
        })
    })

    return [...new Set([...artistArr])].join(',  ')
}