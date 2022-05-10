import {Button, Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";
import logOut from "../functions/logOut";
import React, {useState} from "react";
import styleLoginLogout from "../styles/styleLoginLogout";
import getFromStore from "../functions/getFromStore";
import refreshToken from "../functions/refreshToken";
import getAccessToken from "../functions/getAccessToken";
import axios from "axios";
import backendURL from "../backendURL";
import removeFirstAndLast from "../functions/removeFirstAndLast";


function SettingsScreen() {
    const [hasLoaded, setHasloaded] = useState(false);
    const [ownId, setOwnId] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [roles, setRoles] = useState([]);
    const [favoriteSubjects, setFavoriteSubjects] = useState([]);
    const [preferredSubjects, setPrefferedSubjects] = useState([]);
    const [targetAudience, setTargetAudience] = useState([]);

    React.useEffect(()=> {
        const constructor = async () => {
            await refreshToken();
            let token = await getAccessToken();
            let id = await getFromStore("ownId");
            id = removeFirstAndLast(id)

            const axios = require('axios');
            const config = {
                method: 'get',
                url: backendURL + '/userManagement/users/' + id,
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(token)
                }
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    setLastName(response.data.lastName);
                    setFirstName(response.data.firstName);
                    setEmail(response.data.email);
                    setPhone(response.data.telNr)
                    setRoles(response.data.roles)
                    setFavoriteSubjects(response.data.favouriteSubjects)
                    setRoles(response.data.roles)
                    setPrefferedSubjects(response.data.preferredSubjects)
                    setTargetAudience(response.data.targetAudience)
                })
                .catch(function (error) {
                    console.log(error);
                });

            //setHasloaded(true);
        }
        constructor();
    },[])

    // if(!hasLoaded) return null;
    return(
        <View style={styleLoginLogout.basicContainer}>
            <Image
                source={require("../props/ProfilePic.png")}
                style={{width: 80, height: 80, borderRadius: 80/ 2}}
            />

            <View style={styleLoginLogout.infoLine}>
                <Text style={styleLoginLogout.tag}>{"\t\t"} Name:</Text>
                <Text style={styleLoginLogout.prop}>{lastName}</Text>
            </View>

            <View style = {styleLoginLogout.viewLine}/>


            <View style={styleLoginLogout.infoLine}>
                <Text style={styleLoginLogout.tag}>{"\t\t"} Firstname: </Text>
                <Text style={styleLoginLogout.prop}>{firstName} </Text>
            </View>

            <View style = {styleLoginLogout.viewLine}/>

            <View style={styleLoginLogout.infoLine}>
                <Text style={styleLoginLogout.tag}>{"\t\t"} Email: </Text>
                <Text style={styleLoginLogout.prop}>{email}</Text>
            </View>

            <View style = {styleLoginLogout.viewLine}/>

            <View style={styleLoginLogout.infoLine}>
                <Text style={styleLoginLogout.tag}>{"\t\t"} Phone: </Text>
                <Text style={styleLoginLogout.prop}>{phone}</Text>
            </View>

            <View style = {styleLoginLogout.viewLine}/>

            <View style={styleLoginLogout.infoLine}>
                <Text style={styleLoginLogout.tag}>{"\t\t"} Roles: </Text>
                <Text style={styleLoginLogout.prop}>{roles.length}</Text>
            </View>

            <View style = {styleLoginLogout.viewLine}/>

            <View style={styleLoginLogout.infoLine}>
                <Text style={styleLoginLogout.tag}>{"\t\t"} Favorites: </Text>
                <Text style={styleLoginLogout.prop}>{favoriteSubjects.length}</Text>
            </View>

            <View style = {styleLoginLogout.viewLine}/>

            <View style={styleLoginLogout.infoLine}>
                <Text style={styleLoginLogout.tag}>{"\t\t"} TargetAud.: </Text>
                <Text style={styleLoginLogout.prop}>{targetAudience}</Text>
            </View>

            <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={logOut}>
                <Text style={styleLoginLogout.loginText}>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    )

}

export default SettingsScreen;