import {Button, Text, View, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";
import React from "react";

function FavoriteScreen({route, navigation}) {

    return(

        <View>
            <Text>test</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default FavoriteScreen;