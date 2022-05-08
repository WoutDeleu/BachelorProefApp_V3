import {Button, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import logOut from "../functions/logOut";
import React, {useState} from "react";
import styleLogin from "../styles/styleLogin";
import getFromStore from "../functions/getFromStore";
import refreshToken from "../functions/refreshToken";
import getAccessToken from "../functions/getAccessToken";
import axios from "axios";



function SettingsScreen() {
    const [hasLoaded, setHasloaded] = useState(false);
    const [ownId, setOwnId] = useState('');

    React.useEffect(()=> {
        const constructor = async () => {
            let id = await getFromStore("ownId");
            setOwnId(id);
            setHasloaded(true);
        }
        constructor();
    },[])

    if(!hasLoaded) return null;

    return(
        <View style={{alignItems: 'center'}}>
            <Text>
                {ownId}
            </Text>
            <TouchableOpacity style={styleLogin.loginBtn} onPress={logOut}>
                <Text style={styleLogin.loginText}>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    )

}

export default SettingsScreen;