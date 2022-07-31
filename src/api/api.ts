import axios from "axios";
import {Pokemon, PokemonListItem} from "../store/slice";


export const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

export const api = {
    getPokemon(limit: number) {
        return instance.get<{ results: PokemonListItem[] }>(`/pokemon?limit=${limit}`)
    },
    getCurrentPokemon(url: string) {
        return instance.get<Pokemon>(`${url}`)
    }
}