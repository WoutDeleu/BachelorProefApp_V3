import {View, Text, TouchableOpacity} from "react-native";
import styleActions from "../../../styles/styleActions";
import React from "react";
import styleLoginLogout from "../../../styles/styleLoginLogout";

function CompanyScreen({navigation}) {
    return(
        <View style={styleActions.container}>
            <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={() => navigation.navigate('comp_ApprComp')}>
                <Text style={styleLoginLogout.loginText}> APPROVED COMPANIES </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={() => navigation.navigate('comp_NonApprComp')}>
                <Text style={styleLoginLogout.loginText}> NON APPROVED COMPANIES </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CompanyScreen;