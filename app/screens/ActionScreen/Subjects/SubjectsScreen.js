import {View, Text, TouchableOpacity} from "react-native";
import styleActions from "../../../styles/styleActions";
import React from "react";

function SubjectsScreen({navigation}) {
    return(
        <View style={styleActions.container}>
            <TouchableOpacity onPress={() => navigation.navigate('subj_ApprComp')}>
                <Text> APPROVED SUBJECTS </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('subj_NonApprComp')}>
                <Text> NON APPROVED SUBJECTS </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SubjectsScreen;