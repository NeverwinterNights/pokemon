import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {CurrentPokemonPropsType} from "./types";
import {useEffect} from "react";
import {getCurrentPokemon} from "../store/slice";
import {useAppDispatch, useAppSelector} from "../store/store";


export const CurrentPokemon = ({route}: CurrentPokemonPropsType) => {
    const {url} = route.params
    const dispatch = useAppDispatch()
    const dataPokemon = useAppSelector(state => state.reducer.pokemon)
    const {width, height} = Dimensions.get("screen")


    // useEffect(() => {
    //     dispatch(getPokemonData(url.replace("https://pokeapi.co/api/v2", "")))
    // }, [])

    useEffect(() => {
        dispatch(getCurrentPokemon({url: url.replace("https://pokeapi.co/api/v2", "")}))
    }, [url])

    return (
        <View>
            {/*<Text>{URLForRequest}</Text>*/}
            {dataPokemon && dataPokemon.sprites && dataPokemon.sprites.other ?
                <Image source={{uri: dataPokemon.sprites.other["official-artwork"].front_default}}
                       style={{width: width, height: height / 2}}/> : <Text>__N/A Image</Text>}
            <View style={{width: (width - 40), height: 1, backgroundColor: "red", alignSelf: "center"}}/>
            {dataPokemon ? <Text style={styles.name}>{dataPokemon.name}</Text> : <Text>__N/A Text</Text>}
            <View style={{width: (width - 40), height: 1, backgroundColor: "red", alignSelf: "center"}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    name: {
        fontSize: 32,
        fontWeight: "800",
        alignSelf: "center",
        marginVertical: 5
    }
});
