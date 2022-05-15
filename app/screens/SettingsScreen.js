import {Button, Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";
import React, {useContext, useState} from "react";
import styleLoginLogout from "../styles/styleLoginLogout";
import getFromStore from "../functions/getFromStore";
import refreshToken from "../functions/refreshToken";
import getAccessToken from "../functions/getAccessToken";
import backendURL from "../backendURL";
import removeFirstAndLast from "../functions/removeFirstAndLast";
// import logOut from "../functions/logOut";

import Spinner from "react-native-loading-spinner-overlay";
import {AuthContext} from "../Authentication/AuthProvider";
import axios from "axios";


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
    const [stringRoles, setStringRoles] = useState("");
    const {userInfo, isLoading, logout} = useContext(AuthContext);
    const roles_names = [];

    React.useEffect(()=> {
        const basics = async () => {
            await refreshToken();
            let token = await getAccessToken();
            let id = await getFromStore("ownId");
            id = removeFirstAndLast(id)

            const axios = require('axios');
            let config = {
                method: 'get',
                url: backendURL + '/userManagement/users/' + id,
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(token)
                }
            };
            await axios(config)
                .then(function (response) {
                    // console.log(JSON.stringify(response.data));
                    setLastName(response.data.lastName);
                    setFirstName(response.data.firstName);
                    setEmail(response.data.email);
                    setPhone(response.data.telNr)
                    setRoles(response.data.roles)
                    setRoles(response.data.roles)
                    setPrefferedSubjects(response.data.preferredSubjects)
                    setTargetAudience(response.data.targetAudience)
                    for (let i = 0; i < response.data.roles.length; i++) {
                        roles_names.push(response.data.roles[i].name);
                    }
                    let stringRoles = "";
                    for (let i = 0; i < response.data.roles.length; i++) {
                        if (i === 0) stringRoles = response.data.roles[i].name;
                        else stringRoles = stringRoles + ", \n" + response.data.roles[i].name;
                        if (i === response.data.roles.length - 1) setStringRoles(stringRoles)
                    }
                }).catch(function (error) {
                    console.log(error);
                });
        }
        const getFavorites = async () => {
            await refreshToken();
            let token = await getAccessToken();
            let id = await getFromStore("ownId");
            id = removeFirstAndLast(id)
            let config = {
                method: 'get',
                url: backendURL + '/userManagement/users/' + id + '/favouriteSubjects',
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(token)
                }
            }
            axios(config)
                .then(function (response) {
                    console.log(response.data)
                    setFavoriteSubjects(response.data)
                })
        }

        basics(); getFavorites();
    },[])

    const joinedRoles = () => {

        return stringRoles;
    }
    const stringRolesDef = joinedRoles();
    // if(!hasLoaded) return null;
    const getName = (name) => {
        if(name === null) {
            return(
                <View style={styleLoginLogout.infoLine}>
                    <Text style={styleLoginLogout.tag}>{"\t\t"} Name:</Text>
                    <Text style={styleLoginLogout.prop}>{lastName}</Text>
                </View>
            )
        }
        else return null;
    }

    return(
        <View style={styleLoginLogout.basicContainer}>
            <Spinner visible={isLoading}/>
            <Image
                source={require("../props/ProfilePic.png")}
                style={{width: 80, height: 80, borderRadius: 80/ 2}}
            />

            {getName(firstName)}

            <View style = {styleLoginLogout.viewLine}/>


            <View style={styleLoginLogout.infoLine}>
                <Text style={styleLoginLogout.tag}>{"\t\t"} Firstname: </Text>
                <Text style={styleLoginLogout.prop}>{firstName} </Text>
            </View>

            <View style = {styleLoginLogout.viewLine}/>

            <View style={styleLoginLogout.infoLine}>
                <Text style={styleLoginLogout.tag}>{"\t\t"} Email: </Text>
                <Text style={styleLoginLogout.propEmail}>{email}</Text>
            </View>

            <View style = {styleLoginLogout.viewLine}/>

            <View style={styleLoginLogout.infoLine}>
                <Text style={styleLoginLogout.tag}>{"\t\t"} Phone: </Text>
                <Text style={styleLoginLogout.prop}>{phone}</Text>
            </View>

            <View style = {styleLoginLogout.viewLine}/>

            <View style={styleLoginLogout.infoLine}>
                <Text style={styleLoginLogout.tag}>{"\t\t"} Roles: </Text>
                <Text style={styleLoginLogout.prop}>{stringRolesDef}</Text>
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

            <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={()=>logout()}>
                <Text style={styleLoginLogout.loginText}>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    )

}

export default SettingsScreen;