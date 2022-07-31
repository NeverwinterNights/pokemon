import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AllPokemon} from "./AllPokemon";
import {CurrentPokemon} from "./CurrentPokemon";
import {RootStackParamList} from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="AllPokemon" component={AllPokemon}/>
                <Stack.Screen name="CurrentPokemon" component={CurrentPokemon}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});
