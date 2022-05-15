import {View, Text, TouchableOpacity} from "react-native";
import styleActions from "../../../styles/styleActions";
import React, {useContext} from "react";
import styleLoginLogout from "../../../styles/styleLoginLogout";
import {AuthContext} from "../../../Authentication/AuthProvider";
import isRole from "../../../functions/isRole";

function CompanyScreen({navigation}) {
    const {userInfo} = useContext(AuthContext)
    if(!isRole("ROLE_STUDENT", userInfo)) {
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
    else {
        return(
            <View style={styleActions.container}>
                <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={() => navigation.navigate('comp_ApprComp')}>
                    <Text style={styleLoginLogout.loginText}> APPROVED COMPANIES </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default CompanyScreen;