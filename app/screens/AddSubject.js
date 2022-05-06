import React, {Component, useState} from 'react';
import {View, StyleSheet, Picker} from 'react-native';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Button from '../components/Form/Button';
import Input from '../components/Form/Input';

import { Container, CreateAccountButton, CreateAccountTitle, Icon } from './styles_addSub';
import * as SecureStore from "expo-secure-store";
import axios from "axios";

const subjectForm = () => {
    return null;
}
//     const [title,setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [nrOfStudents, setNrOfStudents] = useState('');
//     const [tags, setTags] = useState([]);
//     const [inputTags, setInputTags] = useState([]);
//     const [faculties, setFaculties] = useState([]);
//     const [inputFaculties, setInputFaculties] = useState([]);
//     const [educations, setEducations] = useState([]);
//     const [inputEducations, setInputEducations] = useState([]);
//     const [campuses, setCampuses] = useState([]);
//     const [inputCampuses, setInputCampuses] = useState([]);
//     const [page, setPage]= useState(1);
//     const [subjectId, setSubjectId] = useState('')
//     const [hasLoaded, setHasLoaded] = useState(hasLoadedArray);
//     const [allHaveLoaded, setAllHaveLoaded] = useState(false);
//
//     const hasLoadedArray = [
//         {
//             id: 1,
//             state: false,
//         },
//         {
//             id: 2,
//             state: false,
//         },
//     ]
//     if(!allHaveLoaded){
//         let axios = require('axios');
//
//         //Get all tags
//         let config = {
//             method: 'get',
//             url: 'http://localhost:8081/subjectManagement/tag',
//             headers: {
//                 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('access_token'))
//             }
//         };
//         axios(config)
//             .then(function (res) {
//                 if(tags.length===0){
//                     for(let i =0; i< res.data.length; i++){
//                         setTags(res.data);
//                     }
//                     setHasLoaded[0] = true;
//                 }
//
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//
//         //Get all faculties
//         config = {
//             method: 'get',
//             url: 'http://localhost:8081/subjectManagement/faculty',
//             headers: {
//                 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('access_token'))
//             }
//         };
//         console.log("loading faculties");
//         axios(config).then(function(res){
//             if(faculties.length===0){
//                 for(let i=0; i < res.data.length;i++){
//                     setFaculties(res.data);
//                 }
//                 setHasLoaded[1] = true;
//                 console.log("faculties loaded");
//             }
//         }).catch(function (error) {
//             console.log(error);
//         });
//
//         let counter =0;
//         for(let i =0; i<2; i++){
//             if(hasLoaded[i] === true) counter++;
//         }
//         if(counter===2)setAllHaveLoaded(true);
//     }
//
//     const refreshToken = async () => {
//         const t = await SecureStore.getItemAsync("access_token")
//         const time = await SecureStore.getItemAsync("access_token_expired")
//         // console.log(t);
//         // console.log(time);
//
//         let expTime_at = await SecureStore.getItemAsync('access_token_expired');
//         let expTime_rt = await SecureStore.getItemAsync('refresh_token_expired');
//         let curTime = new Date().getTime();
//         const url_refresh = "http://" + ipKot + ":" + portNr + "/authentication/token/refresh";
//
//         if(expTime_at>curTime) { }
//         else {
//             if(expTime_rt>curTime) {
//                 let config = {
//                     method: 'get',
//                     url: url_refresh,
//                     headers:{
//                         'Authorization': 'Bearer ' + JSON.parse(await SecureStore.getItemAsync("refresh_token"))
//                     }
//                 }
//                 axios(config).then(function(res){
//                     SecureStore.setItemAsync("access_token", JSON.stringify(res.data.access_token));
//                     let time = new Date().getTime();//getTime gives the amount of millieseconds that have passed since January 1st 1970
//                     let access_token_expired = new Date(time + 10*60*1000).getTime();
//                     SecureStore.setItemAsync("access_token_expired", JSON.stringify(access_token_expired));
//                     // console.log(res.data.access_token)
//                 }).catch(function (error) {
//                 });
//             }
//         }
//     }
//
//     const handleSubmitBaseSubject = async (e) =>{
//         e.preventDefault()
//
//         //Subject post
//         let axios = require('axios');
//         const tagNames = inputTags.map(inputTags=>inputTags.name);
//         let data = new FormData();
//         data.append('name', title);
//         data.append('description', description);
//         data.append('nrOfStudents', nrOfStudents);
//         for(let i =0; i<tagNames.length; i++){
//             data.append('tagNames',tagNames[i]);
//         }
//         console.log(data);
//         let config = {
//             method: 'post',
//             url: 'http://localhost:8081/subjectManagement/subjects',
//             headers: {
//                 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('access_token')),
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             data : data
//         };
//
//         axios(config)
//             .then(function (res) {
//                 console.log("baseSubject posted");
//                 setSubjectId(res.data);
//                 setPage(2);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//
//     }
//
//     //Target Audience post
//     const handleSubmitFaculties = async (e)=>{
//         e.preventDefault();
//         console.log("processing faculties");
//         //Get all educations by chosen faculty
//         let axios = require('axios');
//         var data = new FormData();
//         let facultyIds = inputFaculties.map(inputFaculties=>inputFaculties.id);
//         for(let i =0; i<facultyIds.length; i++){
//             console.log(facultyIds[i]);
//             data.append('facultyIds',facultyIds[i]);
//         }
//         let config = {
//             method: 'POST',
//             url: 'http://localhost:8081/subjectManagement/education/byFaculties' ,
//             headers: {
//                 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('access_token')),
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             data:data
//         };
//         axios(config).then(function(res){
//             if(educations.length===0){
//                 setEducations(res.data);
//                 setPage(3);
//                 console.log(educations);
//             }
//         }).catch(function (error) {
//             console.log(error);
//         });
//
//     }
//     const handleSubmitEducations = async (e)=>{
//         e.preventDefault();
//
//         //Get all educations by chosen faculty
//         let axios = require('axios');
//         console.log("Loading campusses");
//         const educationIds = inputEducations.map(inputEducations=>inputEducations.id);
//         let config;
//         if(educationIds === []) {
//             let data = new FormData();
//             const facultyIds = inputFaculties.map(inputFaculties=>inputFaculties.id);
//             for(let i =0; i<facultyIds.length; i++){
//                 data.append('facultyIds',facultyIds[i]);
//             }
//             config = {
//                 method: 'post',
//                 url: 'http://localhost:8081/subjectManagement/campus/byFaculties',
//                 headers: {
//                     'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('access_token')),
//                     'Content-Type': 'application/x-www-form-urlencoded'
//                 },
//                 data: data
//             };
//         }
//         else {
//             let data = new FormData();
//             for(let i =0; i<educationIds.length; i++){
//                 data.append('educationIds',educationIds[i]);
//             }
//             config = {
//                 method: 'post',
//                 url: 'http://localhost:8081/subjectManagement/campus/byEducations',
//                 headers: {
//                     'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('access_token')),
//                     'Content-Type': 'application/x-www-form-urlencoded'
//                 },
//                 data: data
//             };
//         }
//         axios(config).then(function(res){
//             if(campuses.length===0){
//                 setCampuses(res.data);
//                 console.log(campuses);
//                 setPage(4);
//             }
//         }).catch(function (error) {
//             console.log(error);
//         });
//     }
//
//     const postTargetAudience = async (e) =>{
//         e.preventDefault();
//
//         let axios = require('axios');
//         let qs = require('qs');
//
//         const facultyIds = inputFaculties.map(inputFaculties=>inputFaculties.id);
//         const educationIds = inputEducations.map(inputEducations=>inputEducations.id);
//         const campusIds = inputCampuses.map(inputCampuses=>inputCampuses.id);
//
//         let data = qs.stringify({
//             'facultyIds': facultyIds,
//             'educationIds': educationIds,
//             'campusIds': campusIds,
//         }, {arrayFormat: 'repeat'});
//         console.log(data);
//         var config = {
//             method: 'post',
//             url: 'http://localhost:8081/subjectManagement/subjects/' + subjectId + '/addTargetAudience',
//             headers: {
//                 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('access_token')),
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             data : data
//         };
//
//         axios(config)
//             .then(function (response) {
//                 console.log(JSON.stringify(response.data));
//                 console.log("TargetAudience posted");
//                 setPage(5);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }
//
//     //https://reactnative.dev/docs/picker
//     //https://github.com/romulogmlima/react-native-formik-yup
//     const renderForm = () => {
//         console.log(page)
//         if(page === 1){
//             return(
//                 <KeyboardAvoidingView
//                     enabled style={{flex: 1}}
//                     behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//                 >
//                     <ScrollView
//                         keyboardShouldPersistTaps="handled"
//                         contentContainerStyle={{flex: 1}}
//                     >
//                         <Container>
//                             <Input
//                                 placeholder="Name of subject"
//                                 onChangeText={(e) => setTitle(e.target.value)}
//                                 value={title}
//                             />
//                             {/*<Picker*/}
//                             {/*    placeholder="tags"*/}
//                             {/*    onValueChange={(e) => setInputTags(e)}*/}
//                             {/*    value={values.email}*/}
//                             {/*    errorMessage={touched.email && errors.email}*/}
//                             {/*>*/}
//                             {/*<Picker/>*/}
//                             <Input
//                                 keyboardType='numeric'
//                                 placeholder="Number of Students"
//                                 min="1" max="3"
//                                 placeholder={1}
//                                 onChangeText={(e) => setNrOfStudents(e.target.value)}
//                                 value={nrOfStudents}
//                             />
//                             <Input
//                                 placeholder="description"
//                                 onChangeText={(e) => setDescription(e.target.value)}
//                                 value={description}
//                             />
//                             <Button
//                                 title="next"
//                                 onPress={() => console.log}
//                             />
//                         </Container>
//                     </ScrollView>
//                 </KeyboardAvoidingView>
//             )
//         }
//         else if(page===2){
//             return(
//                 null
//                 // <KeyboardAvoidingView
//                 //     enabled style={{flex: 1}}
//                 //     behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//                 // >
//                 //     <ScrollView
//                 //         keyboardShouldPersistTaps="handled"
//                 //         contentContainerStyle={{flex: 1}}
//                 //     >
//                 //         <Container>
//                 //             <Input
//                 //                 placeholder="Name of subject"
//                 //                 onChangeText={(e) => setTitle(e.target.value)}
//                 //                 value={title}
//                 //             />
//                 //             {/*<Picker*/}
//                 //             {/*    placeholder="tags"*/}
//                 //             {/*    onValueChange={(e) => setInputTags(e)}*/}
//                 //             {/*    value={values.email}*/}
//                 //             {/*    errorMessage={touched.email && errors.email}*/}
//                 //             {/*>*/}
//                 //             {/*<Picker/>*/}
//                 //             <Input
//                 //                 keyboardType='numeric'
//                 //                 placeholder="Number of Students"
//                 //                 min="1" max="3"
//                 //                 placeholder={1}
//                 //                 onChangeText={(e) => setNrOfStudents(e.target.value)}
//                 //                 value={nrOfStudents}
//                 //             />
//                 //             <Input
//                 //                 placeholder="description"
//                 //                 onChangeText={(e) => setDescription(e.target.value)}
//                 //                 value={description}
//                 //             />
//                 //             <Button
//                 //                 title="next"
//                 //                 onPress={() => console.log}
//                 //             />
//                 //         </Container>
//                 //     </ScrollView>
//                 // </KeyboardAvoidingView>
//             )
//         }
//         else if(page===3){
//             return(
//                 null
//                 // <Container>
//                 //     <Form id={"educationSubmit"} onSubmit={handleSubmitEducations}>
//                 //         <InputGroup className={"pt-3 pb-3"}>
//                 //             <InputGroup.Text id="Educations">Education</InputGroup.Text>
//                 //             <Select
//                 //                 className={"basic-single"}
//                 //                 classNamePrefix="select"
//                 //                 fluid="sm"
//                 //                 options={educations}
//                 //                 getOptionLabel={(options) => options['name']}
//                 //                 getOptionValue={(options) => options['id']}
//                 //                 isMulti
//                 //                 onChange={(e) => setInputEducations(e)}>
//                 //             </Select>
//                 //         </InputGroup>
//                 //         <Form.Group style={{textAlign: 'center'}} className="mb-3">
//                 //             <Button id={"educationSubmit"} type="submit" >
//                 //                 Next
//                 //             </Button>
//                 //         </Form.Group>
//                 //     </Form>
//                 // </Container>
//             )
//         }
//         else if(page===4){
//             return(
//                 null
//             //     <Container>
//             //         <Form id={"campusSubmit"} onSubmit={postTargetAudience}>
//             //             <InputGroup className={"pt-3 pb-3"}>
//             //                 <InputGroup.Text id="campusses">Campus</InputGroup.Text>
//             //                 <Select
//             //                     className={"basic-single"}
//             //                     classNamePrefix="select"
//             //                     fluid="sm"
//             //                     options={campuses}
//             //                     getOptionLabel={(options) => options['name']}
//             //                     getOptionValue={(options) => options['id']}
//             //                     isMulti
//             //                     onChange={(e) => setInputCampuses(e)}>
//             //                 </Select>
//             //             </InputGroup>
//             //             <Form.Group style={{textAlign: 'center'}} className="mb-3">
//             //                 <Button id={"campusSubmit"} type="submit" variant={"outline-success"}>
//             //                     Submit
//             //                 </Button>
//             //             </Form.Group>
//             //         </Form>
//             //     </Container>
//             )
//         }
//         else{
//             return null;
//         }
//     }
//
//     return (
//         hasLoaded ?
//                 (
//                     renderForm()
//                 )
//                 : <p>Loading</p>
//     );
// }
//
// const styles = StyleSheet.create({
//
// });

export default subjectForm();