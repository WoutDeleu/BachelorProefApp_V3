import {Button, Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, ScrollView} from "react-native";
import * as SecureStore from "expo-secure-store";
import React, {useContext, useState} from "react";
import refreshToken from "../../functions/refreshToken";
import getAccessToken from "../../functions/getAccessToken";
import getFromStore from "../../functions/getFromStore";
import backendURL from "../../backendURL";
import axios from "axios";
import isRole from "../../functions/isRole";
import styleSubjectList from "../../styles/styleSubjectList"
import {AuthContext} from "../../Authentication/AuthProvider";
import Collapsible from 'react-native-collapsible';
import StudentList from "./StudentList";
import * as Animatable from "react-native-animatable";
import styleActions from "../../styles/styleActions";
import Accordion from "react-native-collapsible/Accordion";
import CoordinatorsList from "./CoordinatorsList";


function ActionScreen({navigation}) {
    const {userInfo} = useContext(AuthContext);
    if(isRole("ROLE_ADMIN", userInfo) || isRole("ROLE_COORDINATOR", userInfo) || isRole("ROLE_ADMIN", userInfo)) {
        return (
            <View style={{flex: 1}}>

            </View>
        )
    }
}
export default ActionScreen;