import {Button, Text, View, StyleSheet, Contai, TouchableOpacity} from "react-native";
import * as SecureStore from "expo-secure-store";
import React, {Component, useState} from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons'
import axios from "axios";
import TextAncestorContext from "react-native-web/dist/exports/Text/TextAncestorContext";
import {ScrollView} from "react-native";
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";
import ReadMore from 'react-native-read-more-text';





const ip = "192.168.20.181";
const portNr = "8081"

function  SubjectListScreen({navigation}) {
    const [subjects, setSubjects] = useState([]);
    const [details, setDetails] = useState([]);
    // const [hasLoaded, setHasloaded] = useState(false);

    const getToken = async () => {
        try {
            console.log("function getToken");
            let token = await SecureStore.getItemAsync('access_token');
            // setHasloaded(true);
            console.log("done");
            return token;
        } catch (e) {
            console.log(e.message);
        }
    }

    React.useEffect(()=> {
        const constructor = async () => {
/*            let token = await getToken();
            console.log(token);
            let axios = require('axios');
            console.log('http://' + ip + '/' + portNr + '/subjectManagement/subjects');
            console.log('Bearer ' + token);

            let config = {
                method: 'get',
                url: 'http://' + ip + '/' + portNr + '/subjectManagement/subjects',
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(token)
                }
            };*/
            //TODO -> haal token uit securestorage.... en Gebruik die



            var config = {
                method: 'get',
                url: 'http://192.168.20.181:8081/subjectManagement/subjects',
                headers: {
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0b255LndhdXRlcnNAa3VsZXV2ZW4uYmUiLCJyb2xlcyI6WyJST0xFX0NPT1JESU5BVE9SIiwiUk9MRV9QUk9NT1RPUiJdLCJpc3MiOiJodHRwOi8vMTkyLjE2OC4yMC4xODE6ODA4MS9hdXRoZW50aWNhdGlvbi90b2tlbi9yZWZyZXNoIiwiZXhwIjoxNjUwMDMzNTU3fQ.e9s8XeqYYLfHiUU_WxZ2BJX_1PMdJp2oCtEHB3uaDVY'
                }
            };
            axios(config)
                .then(function (res) {
                    setSubjects(res.data);
                    console.log(res.data);
                }).catch(function (error) {
            });
        }
        constructor();
    },[])


    const renderSubject = (subject) => {
        let {descr} = subject.description;
        console.log(descr);
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
                    {/*HIER MOET DESCRIPTION KOMEN*/}
                    <Text>
                        In 2017 deed Van der Hoorn een stap hogerop en werd hij prof bij Roompot-Nederlandse Loterij. In zijn eerste jaar als prof won hij de Schaal Sels en werd hij tweede in Dwars door het Hageland en de Tacx Pro Classic. Een jaar later won hij de derde etappe van de BinckBank Tour, een wedstrijd uit de UCI World Tour.
                    </Text>
                </ReadMore>
            </View>
        )
    }


    const _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{color: '#ffff', marginTop: 5}} onPress={handlePress}>
                Read more
            </Text>
        );
    }

    const _renderRevealedFooter = (handlePress) => {
        return (
            <Text style={{color: '#ffff', marginTop: 5}} onPress={handlePress}>
                Show less
            </Text>
        );
    }
    const _handleTextReady = () => {
        // ...
    }

    return(
        <View style={styles.container}>
            {/*Code voor de plusbutton*/}
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffc2c2",
            }}
            >
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
            <View style={{justifyContent: 'center',}}>
                {subjects.map(renderSubject)}
            </View>

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
        width: 250,
        height: 150,
        borderWidth: 2,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems:"center"
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
        color: '#ffff',
        justifyContent: 'center',alignItems:"center"

    }
})
export default SubjectListScreen;