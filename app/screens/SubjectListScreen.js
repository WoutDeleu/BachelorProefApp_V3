import {
    Button,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import React, {Component, useState} from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons'
import axios from "axios";
import TextAncestorContext from "react-native-web/dist/exports/Text/TextAncestorContext";
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";
import ReadMore from 'react-native-read-more-text';

const ipKot = "192.168.20.181";
const ipCamp = "192.168.163.1";
const portNr = "8081"

function  SubjectListScreen({navigation}) {
    const [subjects, setSubjects] = useState([]);
    const [details, setDetails] = useState([]);
    const [hasLoaded, setHasloaded] = useState(false);

    const getToken = async () => {
        try {
            // console.log("function getToken");
            let token = await SecureStore.getItemAsync('access_token');
            // console.log("done");
            return token;
        } catch (e) {
            console.log(e.message);
        }
    }
    const refreshToken = async () => {
        const t = await SecureStore.getItemAsync("access_token")
        const time = await SecureStore.getItemAsync("access_token_expired")
        // console.log(t);
        // console.log(time);

        let expTime_at = await SecureStore.getItemAsync('access_token_expired');
        let expTime_rt = await SecureStore.getItemAsync('refresh_token_expired');
        let curTime = new Date().getTime();
        const url_refresh = "http://" + ipKot + ":" + portNr + "/authentication/token/refresh";

        if(expTime_at>curTime) { }
        else {
            if(expTime_rt>curTime) {
                let config = {
                    method: 'get',
                    url: url_refresh,
                    headers:{
                        'Authorization': 'Bearer ' + JSON.parse(await SecureStore.getItemAsync("refresh_token"))
                    }
                }
                axios(config).then(function(res){
                    SecureStore.setItemAsync("access_token", JSON.stringify(res.data.access_token));
                    let time = new Date().getTime();//getTime gives the amount of millieseconds that have passed since January 1st 1970
                    let access_token_expired = new Date(time + 10*60*1000).getTime();
                    SecureStore.setItemAsync("access_token_expired", JSON.stringify(access_token_expired));
                    // console.log(res.data.access_token)
                }).catch(function (error) {
                });
            }
        }
    }

    React.useEffect(()=> {
        const constructor = async () => {
            await refreshToken();
            let token = await getToken();
            let axios = require('axios');

            let config = {
                method: 'get',
                url: 'http://' + ipKot + ':' + portNr + '/subjectManagement/subjects',
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(token)
                }
            };
            axios(config)
                .then(function (res) {
                    setSubjects(res.data);
                    setHasloaded(true);
                    //console.log(res.data);
                }).catch(function (error) {
            });
        }
        constructor();
    },[])


    const Subject = ({subject}) => {
        {console.log(subject.name)}
        return(
            <View style={styles.subjectTotalBlock}>
                <Text style={styles.students}>
                    Students: {subject.nrOfStudents}
                </Text>
                <Text style ={styles.title}>
                    {subject.name}
                </Text>
                <ReadMore
                    numberOfLines={3}
                    renderTruncatedFooter={_renderTruncatedFooter}
                    renderRevealedFooter={_renderRevealedFooter}
                    onReady={_handleTextReady}>
                    <Text style={styles.shortDescription}>
                        {subject.description}
                    </Text>
                </ReadMore>
            </View>
        );
    };


    const _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{color: '#0096FF', marginTop: 5}} onPress={handlePress}>
                Read more
            </Text>
        );
    }
    const _renderRevealedFooter = (handlePress) => {
        return (
            <Text style={{color: '#0096FF', marginTop: 5}} onPress={handlePress}>
                Show less
            </Text>
        );
    }
    const _handleTextReady = () => {
        // ...
    }
    if(!hasLoaded) return null;

    return(
        <View style={styles.container}>
            {/*Code voor de plusbutton*/}
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffc2c2",
            }}>
                <TouchableOpacity
                    style={{
                        borderWidth:1,
                        borderColor:'rgba(0,0,0,0.2)',
                        position: 'absolute',
                        top:580,
                        alignItems:'center',
                        justifyContent:'center',
                        width:40,
                        height:40,
                        backgroundColor:'#212521',
                        borderRadius:50,
                    }}
                >
                    <Ionicons name="add-outline" size={30} color="#ffff"/>
                </TouchableOpacity>
            </View>
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

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:"center"
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subjectTotalBlock: {
        backgroundColor: "#212521",
        width: 350,
        height: 'auto',
        borderWidth: 2,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems:"center",
        alignSelf: 'flex-start',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    title: {
        color: "#ffff",
        fontWeight: 'bold',
        textDecorationStyle : 'solid',
        fontSize: 20,
        justifyContent: 'center',alignItems:"center"
    },
    students: {
        color: "#ffff",
        fontStyle: 'italic',
        justifyContent: 'center',alignItems:"center"
    },
    shortDescription: {
        color: '#C0C0C0',
        justifyContent: 'center',alignItems:"center"

    }
})
export default SubjectListScreen;