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

function  SubjectListScreen({navigation}) {
    const [subjects, setSubjects] = useState([]);
    const [details, setDetails] = useState([]);
    const [hasLoaded, setHasloaded] = useState(false);



    React.useEffect(()=> {
        const constructor = async () => {
            await refreshToken();
            let token = await getAccessToken();
            let axios = require('axios');

            let config = {
                method: 'get',
                url: 'https://mastertoolbackend.herokuapp.com/subjectManagement/subjects',
                // url: 'https://mastertoolbackend.herokuapp.com/subjectManagement/subjects/approved',
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


    if(!hasLoaded) return null;

    return(
        <View style={styleSubjectList.container}>
                <TouchableOpacity
                    // onPress={() => { navigation.navigate('AddSubject') }}
                    onPress={() => console.log("addSubj")}
                    style={{
                        borderWidth:1,
                        borderColor:'rgba(0,0,0,0.2)',
                        top:580,
                        alignItems:'center',
                        justifyContent:'center',
                        width:40,
                        height:40,
                        backgroundColor:'#212521',
                        borderRadius:50,
                        zIndex: 1
                    }}
                >
                    <Ionicons name="add-outline" size={30} color="#ffff"/>
                </TouchableOpacity>
            <SafeAreaView style={{justifyContent: 'center',}}>
                <FlatList
                    style={{flex:1, marginTop: StatusBar.currentHeight || 0,}}
                    data={subjects}
                    renderItem={ ({item}) => {
                        return <Subject subject={item}/>
                    }}
                    keyExtractor={ subject => subject.id }
                />
            </SafeAreaView>
        </View>
    )
}

export default SubjectListScreen;