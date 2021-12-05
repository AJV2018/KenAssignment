import apiInstance from "./apiInstance"

const handleCatch = (err: Object, reject: any) => {
    console.log('REJECT >>>', err)
    reject(err?.response?.data || err.toString())
}

export const getAlbums = (offset: number): Promise<any> => {
    return new Promise((resolve, reject) => {
        apiInstance
            .get(`/albums/top?limit=20&offset=${offset}`)
            .then(({ data }) => resolve(data))
            .catch(err => handleCatch(err, reject))
    })
}

export const getTracks = (albumId: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        apiInstance
            .get(`/albums/${albumId}/tracks`)
            .then(({ data }) => resolve(data))
            .catch(err => handleCatch(err, reject))
    })
}