import {View, Text, TouchableOpacity} from "react-native";
import styleActions from "../../../styles/styleActions";
import React from "react";
import styleLoginLogout from "../../../styles/styleLoginLogout";

function SubjectsScreen({navigation}) {
    return(
        <View style={styleActions.container}>
            <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={() => navigation.navigate('subj_ApprComp')}>
                <Text style={styleLoginLogout.loginText}> APPROVED SUBJECTS </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={() => navigation.navigate('subj_NonApprComp')}>
                <Text style={styleLoginLogout.loginText}> NON APPROVED SUBJECTS </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SubjectsScreen;