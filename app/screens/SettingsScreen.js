import {Button, Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";
import logOut from "../functions/logOut";
import React, {useState} from "react";
import styleLoginLogout from "../styles/styleLoginLogout";
import getFromStore from "../functions/getFromStore";
import refreshToken from "../functions/refreshToken";
import getAccessToken from "../functions/getAccessToken";
import axios from "axios";


function SettingsScreen() {
    const [hasLoaded, setHasloaded] = useState(false);
    const [ownId, setOwnId] = useState('');
    const [user, setUser] = useState('');

    React.useEffect(()=> {
        const constructor = async () => {
            await refreshToken();
            let token = await getAccessToken();
            let id = await getFromStore("ownId");
            setOwnId(id);

            const axios = require('axios');

            const config = {
                method: 'get',
                url: 'https://mastertoolbackend.herokuapp.com/userManagement/users/' + ownId,
                headers: {
                    'Authorization': 'Bearer ' + JSON.stringify(token)
                }
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    setUser(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });


            setHasloaded(true);
        }
        constructor();
    },[])

    if(!hasLoaded) return null;

    return(
        <View style={styleLoginLogout.basicContainer}>
            <Image
                source={require("../props/ProfilePic.png")}
                style={{width: 80, height: 80, borderRadius: 80/ 2}}
            />

            <View style={styleLoginLogout.infoLine}>
                <Text style={styleLoginLogout.tag}>{"\t\t"} Name:</Text>
                <Text style={styleLoginLogout.prop}>ha{user.lastName}</Text>
            </View>

            <View style = {styleLoginLogout.viewLine}/>


            <View style={styleLoginLogout.infoLine}>
                <Text style={styleLoginLogout.tag}>{"\t\t"} Firstname: </Text>
                <Text style={styleLoginLogout.prop}>ha{user.firstName} </Text>
            </View>

            <View style = {styleLoginLogout.viewLine}/>

            <View style={styleLoginLogout.infoLine}>
                <Text style={styleLoginLogout.tag}>{"\t\t"} Email: </Text>
                <Text style={styleLoginLogout.prop}>ha{user.email}</Text>
            </View>

            <View style = {styleLoginLogout.viewLine}/>

            <View style={styleLoginLogout.infoLine}>
                <Text style={styleLoginLogout.tag}>{"\t\t"} Phone: </Text>
                <Text style={styleLoginLogout.prop}>{user.telNr}</Text>
            </View>

            <View style = {styleLoginLogout.viewLine}/>

            <View style={styleLoginLogout.infoLine}>
                <Text style={styleLoginLogout.tag}>{"\t\t"} Role: </Text>
                <Text style={styleLoginLogout.prop}>{user.roles}</Text>
            </View>

            <View style = {styleLoginLogout.viewLine}/>

            {/*<View>*/}
            {/*    <Text>Amount of Favorites: </Text> <Text>{user.preferredSubjects.size}</Text>*/}
            {/*</View>*/}

            <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={logOut}>
                <Text style={styleLoginLogout.loginText}>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    )

}

export default SettingsScreen;