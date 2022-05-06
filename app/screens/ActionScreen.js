import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import * as SecureStore from "expo-secure-store";
import React, {useState} from "react";

function ActionScreen({navigation}) {
    return null;
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    roundedBox: {
        height: 30,
        backgroundColor: '#212521',
        borderRadius: 10,
        width: 120,
        position: 'absolute',
        right: 20,
        top: 40,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#efefef',
        height: 50,
        width: '90%',
        paddingHorizontal: 10,
        zIndex: 1,
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: '#fff',
        top: 50,
    },
})
export default ActionScreen;