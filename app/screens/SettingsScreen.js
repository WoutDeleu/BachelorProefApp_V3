import {Button, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import logOut from "../functions/logOut";
import React from "react";
import styleLogin from "../styles/styleLogin";

function SettingsScreen() {

    return(

        <View style={{
                alignItems: 'center'
            }}
        >
            <TouchableOpacity style={styleLogin.loginBtn} onPress={logOut}>
                <Text style={styleLogin.loginText}>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SettingsScreen;