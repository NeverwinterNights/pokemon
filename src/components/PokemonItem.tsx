import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PokemonListItem} from "../store/slice";
import {useAppNavigation} from "../screens/types";

type  PokemonItemPropsType = {
    item: PokemonListItem
    index: number
}

const {width, height} = Dimensions.get("screen")


export const PokemonItem = ({item, index}: PokemonItemPropsType) => {
    const navigation = useAppNavigation()


    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("CurrentPokemon", {url: item.url})}>
            <View style={[styles.main, {width: (width - 50) / 2, backgroundColor: index % 2 ? "red" : "green"}]}>
                <Text style={styles.pokemonName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    main: {
        height: 48,
        backgroundColor: "#ffdbdb",
        marginVertical: 4,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5

    },
    pokemonName: {
        fontSize: 18,
        fontWeight: "500"
    }
});
