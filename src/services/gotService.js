export default class GotService {
    constructor() {
        this._apiBase = 'https://rickandmortyapi.com/api'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`could not fetch ${url}`)
        }
        return await res.json()
    }

    getAllCharacters = async () => {
        const res = await this.getResource('/character')
        return res
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`/character/${id}`)
        return res
    }
}