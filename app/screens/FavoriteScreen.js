import {
    Button,
    Text,
    View,
    StyleSheet,
    FlatList,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from "react-native";
import React, {Component, useState} from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from "react-native";

import getAccessToken from "../functions/getAccessToken";
import refreshToken from "../functions/refreshToken";

import Subject from "../functions/SubjectLoaders/Subject";
import styleSubjectList from "../styles/styleSubjectList";
import backendURL from "../backendURL";
import getFromStore from "../functions/getFromStore";

import {BottomTabBarHeightContext, useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import FavoriteSubject from "../functions/SubjectLoaders/FavoriteSubject";


function  SubjectListScreen({navigation}) {
    const [subjects, setSubjects] = useState([]);
    const [details, setDetails] = useState([]);
    const [hasLoaded, setHasloaded] = useState(false);
    const tabBarHeight = useBottomTabBarHeight();


    React.useEffect(()=> {
        const constructor = async () => {
            await refreshToken();
            let token = await getAccessToken();
            let ownId = await getFromStore("ownId")
            console.log("ownId: " + ownId)
            let axios = require('axios');

            let config = {
                method: 'get',
                url: backendURL + '/subjectManagement/subjects',
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(token)
                }
            };
            axios(config)
                .then(function (res) {
                    console.log(res.data)
                    setSubjects(res.data);
                    setHasloaded(true);
                    //console.log(res.data);
                }).catch(function (error) {
            });
        }
        constructor();
    },[])


    // if(!hasLoaded) return null;

    return(
        <View style={styleSubjectList.container}>
            <SafeAreaView style={{justifyContent: 'center',}}>
                <FlatList
                    style={{
                        flex:1,
                        marginTop: StatusBar.currentHeight || 0,
                        marginBottom: tabBarHeight+10
                    }}
                    data={subjects}
                    renderItem={ ({item}) => {
                        return <FavoriteSubject subject={item}/>
                    }}
                    keyExtractor={ subject => subject.id }
                />
            </SafeAreaView>
        </View>
    )
}

export default SubjectListScreen;