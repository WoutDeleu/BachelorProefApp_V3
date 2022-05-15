import {View, Text, TouchableOpacity} from "react-native";
import styleActions from "../../../styles/styleActions";
import React from "react";

function CompanyScreen({navigation}) {
    return(
        <View style={styleActions.container}>
            <TouchableOpacity onPress={() => navigation.navigate('ApprComp')}>
                <Text> APPROVED COMPANIES </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('NonApprComp')}>
                <Text> NON APPROVED COMPANIES </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CompanyScreen;