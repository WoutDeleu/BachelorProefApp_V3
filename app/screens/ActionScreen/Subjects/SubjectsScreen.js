// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import StudentList from "./StudentList";
// import CoordinatorsList from "./CoordinatorsList";
// import {View, Text, TouchableOpacity, Button, ScrollView} from "react-native";
// import styleSubjectList from "../../../styles/styleSubjectList";
// import {StatusBar} from "expo-status-bar";
// import styleActions from "../../../styles/styleActions";
// import Accordion from "react-native-collapsible/Accordion";
// import React, {useState} from "react";
// import * as Animatable from "react-native-animatable";
// import getRoles from "../../../functions/getRoles";
// import studentList from "./StudentList";
//
// function SubjectsScreen({navigation}) {
//     const acc = [
//         {
//             name: "Students",
//             data: <StudentList/>
//         },
//         {
//             name: "Coordinators",
//             data: <CoordinatorsList/>
//         },
//     ]
//
//     const [activeSections, setActiveSections] = useState([]);
//     const [content, setContent] = useState([]);
//     const multipleSelect = false;
//
//     const setSections = (sections) => {
//         setActiveSections(sections.includes(undefined) ? [] : sections)
//     };
//
//     const renderHeader = (section, _, isActive) => {
//         return (
//             <Animatable.View
//                 duration={400}
//                 style={[styleActions.header, isActive ? styleActions.active : styleActions.inactive]}
//                 transition="backgroundColor"
//             >
//                 <Text style={styleActions.headerText}>{section.name}</Text>
//             </Animatable.View>
//         );
//     };
//     const renderContent = (section, _, isActive) => {
//         return (
//             <Animatable.View
//                 duration={400}
//                 style={[styleActions.content,isActive ? styleActions.active : styleActions.inactive]}
//                 transition="backgroundColor"
//             >
//                 {section.data}
//             </Animatable.View>
//         );
//     }
//     return (
//         <View style={styleActions.containerGlobal}>
//             <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
//                 <Accordion
//                     activeSections={activeSections}
//                     sections={acc}
//                     touchableComponent={TouchableOpacity}
//                     expandMultiple={multipleSelect}
//                     renderHeader={renderHeader}
//                     renderContent={renderContent}
//                     duration={400}
//                     onChange={setSections}
//                     renderAsFlatList={false}
//                 />
//             </ScrollView>
//             <Button title="GO HOME" onPress={() => navigation.navigate('Home')}/>
//         </View>
//     );
// }
//
// export default SubjectsScreen;