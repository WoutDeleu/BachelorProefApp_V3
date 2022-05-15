import {View, Text, TouchableOpacity} from "react-native";
import styleActions from "../../../styles/styleActions";
import React from "react";
import styleLoginLogout from "../../../styles/styleLoginLogout";

function UserScreen({navigation}) {
    return(
        <View style={styleActions.container}>
            <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={() => navigation.navigate('Admin')}>
                <Text style={styleLoginLogout.loginText}> ADMIN </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={() => navigation.navigate('Coordinators')}>
                <Text style={styleLoginLogout.loginText}> COORDINATOR </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={() => navigation.navigate('Contacts')}>
                <Text style={styleLoginLogout.loginText}> CONTACTS </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={() => navigation.navigate('Students')}>
                <Text style={styleLoginLogout.loginText}> STUDENTS </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={() => navigation.navigate('Promotors')}>
                <Text style={styleLoginLogout.loginText}> PROMOTORS </Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserScreen;