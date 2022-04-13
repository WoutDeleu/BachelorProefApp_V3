import {Button, Text, View, StyleSheet, Contai, TouchableOpacity} from "react-native";
import * as SecureStore from "expo-secure-store";
import React, {Component, useState} from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons'
import axios from "axios";




const ip = "192.168.20.181";
const portNr = "8081"

function  SubjectListScreen({navigation}) {
    const [subjects, setSubjects] = useState([]);
    const [details, setDetails] = useState([]);
    const [hasLoaded, setHasloaded] = useState(false);

    const getToken = async () => {
        try {
            console.log("function getToken");
            let token = await SecureStore.getItemAsync('access_token');
            setHasloaded(true);
            console.log("done");
            return token;
        } catch (e) {
            console.log(e.message);
        }
    }

    React.useEffect(()=> {
        const constructor = async () => {
            let token = await getToken();
            //console.log(token);
            let axios = require('axios');
            //console.log(token);
            token = token.slice(1);
            token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0b255LndhdXRlcnNAa3VsZXV2ZW4uYmUiLCJyb2xlcyI6WyJST0xFX0NPT1JESU5BVE9SIiwiUk9MRV9QUk9NT1RPUiJdLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODEvYXV0aGVudGljYXRpb24vbG9naW4iLCJleHAiOjE2NDk4NzEyMTJ9.RfmtahulXbiOItftuzpe2xpnVtlI7_OJoYbOC7V0Z0s"
            console.log('Bearer ' + token)

            // let config = {
            //     method: 'get',
            //     url: 'http://' + ip + '/' + portNr + '/subjectManagement/subjects',
            //     headers: {
            //         'Authorization': 'Bearer ' + token
            //     }
            // };

            var config = {
                method: 'get',
                url: 'http://192.168.20.181:8081/subjectManagement/subjects',
                headers: {
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0b255LndhdXRlcnNAa3VsZXV2ZW4uYmUiLCJyb2xlcyI6WyJST0xFX0NPT1JESU5BVE9SIiwiUk9MRV9QUk9NT1RPUiJdLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODEvYXV0aGVudGljYXRpb24vbG9naW4iLCJleHAiOjE2NDk4NzEyMTJ9.RfmtahulXbiOItftuzpe2xpnVtlI7_OJoYbOC7V0Z0s'
                }
            };


            console.log("test");
            let self = this;
            axios(config)
                .then(function (res) {
                    setSubjects(res.data);
                    console.log(res.data);
                }).catch(function (error) {
            });
        }
        constructor();
    },[])


    const renderDetails =(subject)=>{
        return(
            <>
                <Button title="tada" onClick={() => {
                    let details = [...details];
                    let detail = details[subject.id-1];
                    detail = !detail;
                    details[subject.id-1] = detail;
                    setDetails(details);
                }
                }
                        aria-controls={"subjectDescription"}
                        aria-expended={setDetails([subject.id-1])}
                >
                    Details
                </Button>
                <View in={setDetails([subject.id-1])}>
                    <View id={"subjectDescription"}>
                        {subject.description}
                    </View>
                </View>
            </>
        )
    }

    const renderSubject = (subject) => {
        return(
            <View>
                <View>
                    <View >Students: {subject.nrOfStudents}</View>
                    <View>
                        <View>{subject.name}</View>
                        {renderDetails(subject)}
                    </View>
                </View>
            </View>
        )
    }
    return(
        <View>
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
            {subjects.map(renderSubject)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default SubjectListScreen;