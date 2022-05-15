import React, {Component, useState} from 'react';
import {
    Switch,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import refreshToken from "../../../functions/refreshToken";
import getAccessToken from "../../../functions/getAccessToken";
import getFromStore from "../../../functions/getFromStore";
import backendURL from "../../../backendURL";
import axios from "axios";
import styleLoginLogout from "../../../styles/styleLoginLogout";
import styleActions from "../../../styles/styleActions";
import getRoles from "../../../functions/getRoles";
import booleanToString from "../../../functions/booleanToString";

function booleanToStringYet(hasPDF) {
    if(hasPDF) return "Not present";
    else return "Present";
}

function ApprovedList() {
    const [activeSections, setActiveSections] = useState([]);
    const [content, setContent] = useState([]);
    const multipleSelect = false;

    React.useEffect(()=> {
        const constructor = async () => {
            await refreshToken();
            let token = await getAccessToken();
            let axios = require('axios');

            let config = {
                method: 'get',
                url: backendURL + '/subjectManagement/subjects',
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(token)
                }
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data))
                    setContent(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
        constructor();
    },[])

    const setSections = (sections) => {
        setActiveSections(sections.includes(undefined) ? [] : sections)
    };

    const renderHeader = (section, _, isActive) => {
        if(section.approved) {
            return (
                <Animatable.View
                    duration={400}
                    style={[styleActions.header, isActive ? styleActions.active : styleActions.inactive]}
                    transition="backgroundColor"
                >
                    <Text style={styleActions.headerText}>{section.name}</Text>
                </Animatable.View>
            );
        }
        else return null;
    };


    const renderContent = (section, _, isActive) => {
        if(section.approved) {
            return (
                <Animatable.View
                    duration={400}
                    style={[styleActions.content, isActive ? styleActions.active : styleActions.inactive]}
                    transition="backgroundColor"
                >
                    <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
                        <Text style={styleActions.tag}> Description: </Text>
                        <Text style={styleActions.prop}>{"\t"}{section.description}</Text>
                        {"\n"}
                        <Text style={styleActions.tag}> Nr of Students: </Text>
                        <Text style={styleActions.prop}>{"\t\t"}{section.nrOfStudents}</Text>
                        {"\n"}
                        <Text style={styleActions.tag}> Company: </Text>
                        <Text style={styleActions.prop}>{"\t\t"}{section.company}</Text>
                        {"\n"}
                        <Text style={styleActions.tag}> Final Students: </Text>
                        <Text style={styleActions.prop}>{"\t\t"}{getRoles(section.finalStudents)}</Text>
                        {"\n"}
                        <Text style={styleActions.tag}> Boosted Students: </Text>
                        <Text style={styleActions.prop}>{"\t\t"}{getRoles(section.boostedStudents)}</Text>
                        {"\n"}
                        <Text style={styleActions.tag}> Promotor: </Text>
                        <Text style={styleActions.prop}>{"\t\t"}{section.promotor}</Text>
                        {"\n"}
                        <Text style={styleActions.tag}> PDF?: </Text>
                        <Text style={styleActions.prop}>{"\t\t"}{booleanToStringYet(section.hasPDF)}</Text>
                    </Animatable.Text>
                </Animatable.View>
            );
        }
        else return null;
    }
    return (
        <View style={styleActions.container}>
            <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
                <Accordion
                    activeSections={activeSections}
                    sections={content}
                    touchableComponent={TouchableOpacity}
                    expandMultiple={multipleSelect}
                    renderHeader={renderHeader}
                    renderContent={renderContent}
                    duration={400}
                    onChange={setSections}
                    renderAsFlatList={false}
                />
            </ScrollView>
        </View>
    );
}



export default ApprovedList;