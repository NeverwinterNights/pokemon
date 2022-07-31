import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../api/api";
import {RootState} from "./store";


export type PokemonListItem = {
    name: string
    url: string
}

export type Pokemon = {
    id: number
    name: string
    sprites: {
        other: {
            'official-artwork': {
                'front_default': string
            }
        }
    }
}


export const addPokemonAC = createAction<{ data: PokemonListItem[] }>("pokemon/addPokemon")
export const addPokemonDataAC = createAction<{ data: Pokemon }>("pokemon/addPokemonDataAC")


export const setPokemon = createAsyncThunk("pokemon/setPokemon", async (limit: number, thunkAPI) => {
    const res = await api.getPokemon(limit)
    return {data: res.data.results}
})


export const getPokemonData = createAsyncThunk("pokemon/getPokemonData", async (url: string, thunkAPI) => {
    const res = await api.getCurrentPokemon(url)
    return {data: res.data}
})


// export const getCurrentPokemon = createAsyncThunk<Pokemon| undefined, {url: string}>("pokemon/getCurrentPokemon", async (url: string, thunkAPI) => {
// export const getCurrentPokemon = createAsyncThunk<Pokemon| undefined, {url: string}>("pokemon/getCurrentPokemon", async ({url: string}) => {
//     const res = await api.getCurrentPokemon(param.url)
//     return {data: res.data}
// })


// export const getPokemonData = (url: string) => async (dispatch: Dispatch) => {
//     const res = await api.getCurrentPokemon(url)
//     dispatch(addPokemonDataAC({data: res.data}))
// }

// export const setPokemon = (limit: number) => async (dispatch: Dispatch) => {
//     const res = await api.getPokemon(limit)
//     dispatch(addPokemonAC({data: res.data.results}))
// }


// const initialState: PokemonListItem[]  = [] as PokemonListItem[]
const initialState = {
    allPokemon: [] as PokemonListItem[],
    pokemon: {} as Pokemon
}


export const getAllPok = createAsyncThunk<PokemonListItem[] | undefined, void, { state: RootState }>("pokemon/getAllPok", async () => {
    try {
        const result = await api.getPokemon(20)
        return result.data.results
    } catch (error) {
        console.log(error);
    }
})


export const getCurrentPokemon = createAsyncThunk<Pokemon | undefined, { url: string }>("pokemon/getCurrentPokemon", async (param) => {
    try {
        const res = await api.getCurrentPokemon(param.url)
        return res.data
    } catch (error) {
        console.log(error)
    }

})


const slice = createSlice({
    name: "pokemon",
    initialState,

    // initialState: {
    //     allPokemon: [] as PokemonListItem[]
    // },

    reducers: {},
    extraReducers: (builder) => {
        builder
            // .addCase(setPokemon.fulfilled, (state, action) => {
            .addCase(getAllPok.fulfilled, (state, action) => {
                // state.allPokemon = action.payload
                state.allPokemon = action.payload ? action.payload : []
            })
            .addCase(getCurrentPokemon.fulfilled, (state, action) => {
                // state.pokemon = action.payload.data
                state.pokemon = action.payload ? action.payload : {} as Pokemon
            })
    }
})


// export const setPokemon = (limit: number) => async (dispatch: Dispatch) => {
//     const res = await api.getPokemon(limit)
//     dispatch(addPokemonAC({data: res.data.results}))
// }

// export const getPokemonData = (url: string) => async (dispatch: Dispatch) => {
//     const res = await api.getCurrentPokemon(url)
//     dispatch(addPokemonDataAC({data: res.data}))
// }


export const reducer = slice.reducer