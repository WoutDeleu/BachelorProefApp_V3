import {View, Text, TouchableOpacity} from "react-native";
import styleActions from "../../../styles/styleActions";
import React from "react";

function UserScreen({navigation}) {
    return(
        <View style={styleActions.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
                <Text> ADMIN </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Coordinators')}>
                <Text> COORDINATOR </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
                <Text> CONTACTS </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Students')}>
                <Text> STUDENTS </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Promotors')}>
                <Text> PROMOTORS </Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserScreen;