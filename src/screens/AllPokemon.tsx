import {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {getAllPok, setPokemon} from "../store/slice";
import {useAppDispatch, useAppSelector} from "../store/store";
import {PokemonItem} from "../components/PokemonItem";




export const AllPokemon = () => {
    const dispatch = useAppDispatch()
    const allPokemon = useAppSelector(state => state.reducer.allPokemon)

    useEffect(() => {
       // dispatch(setPokemon(30))
        dispatch(getAllPok())
    }, [])


    return (
        <View style={{flex: 1, paddingHorizontal:20}}>
            <FlatList
                data={allPokemon}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{justifyContent: "space-between"}}
                keyExtractor={(item) => item.name}
                renderItem={({item, index}) => <PokemonItem index={index} item={item}/>}/>
            {/*<Text>{JSON.stringify(allPokemon, null, 2)}</Text>*/}
        </View>
    );
};

const styles = StyleSheet.create({});
