import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import ActionScreen from "./ActionScreen";
import UserScreen from "./Users/UserScreen";
import StudentList from "./Users/StudentList";
import CoordinatorsList from "./Users/CoordinatorsList";
import AdminList from "./Users/AdminList";
import PromotorList from "./Users/PromotorList";
import ContactList from "./Users/ContactList";
import CompaniesScreen from "./Companies/CompaniesScreen";
import comp_ApprovedList from "./Companies/ApprovedList";
import comp_NonApprovedList from "./Companies/NonApprovedList";
import SubjectsScreen from "./Subjects/SubjectsScreen";
import subj_ApprovedList from "./Subjects/ApprovedList";
import subj_NonApprovedList from "./Subjects/NonApprovedList";


function ActionStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name= "Home" component={ActionScreen}
                options={{
                    title: 'ActionScreen',
                    headerStyle: {
                        backgroundColor: '#212521'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#ffffff',
                    },
            }}/>



            <Stack.Screen
                name= "Users" component={UserScreen}
                options={{
                    title: 'Users',
                    headerStyle: {
                        backgroundColor: '#212521'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#ffffff',
                    },
                }}/>
            <Stack.Screen
                name= "Students" component={StudentList}
                options={{
                    title: 'Students',
                    headerStyle: {
                        backgroundColor: '#212521'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#ffffff',
                    },
                }}/>
            <Stack.Screen
                name= "Coordinators" component={CoordinatorsList}options={{
                title: 'Coordinators',
                headerStyle: {
                    backgroundColor: '#212521'
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: '#ffffff',
                },
            }}/>
            <Stack.Screen
                name= "Admin" component={AdminList}options={{
                title: 'Admins',
                headerStyle: {
                    backgroundColor: '#212521'
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: '#ffffff',
                },
            }}/>
            <Stack.Screen
                name= "Promotors" component={PromotorList}
                options={{
                title: 'Promotors',
                headerStyle: {
                    backgroundColor: '#212521'
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: '#ffffff',
                },
            }}/>
            <Stack.Screen
                name= "Contacts" component={ContactList}
                options={{
                title: 'Contacts',
                headerStyle: {
                    backgroundColor: '#212521'
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: '#ffffff',
                },
            }}/>

            <Stack.Screen
                name="Companies" component={CompaniesScreen}
                options={{
                    title: 'Companies',
                    headerStyle: {
                        backgroundColor: '#212521'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#ffffff',
                    },
                }}/>
            <Stack.Screen
                name="comp_ApprComp" component={comp_ApprovedList}
                options={{
                    title: 'Approved Companies',
                    headerStyle: {
                        backgroundColor: '#212521'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#ffffff',
                    },
                }}/>
            <Stack.Screen
                name="comp_NonApprComp" component={comp_NonApprovedList}
                options={{
                    title: 'Non Approved Companies',
                    headerStyle: {
                        backgroundColor: '#212521'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#ffffff',
                    },
            }}/>



            <Stack.Screen
                name="Subjects" component={SubjectsScreen}
                options={{
                    title: 'Subjects',
                    headerStyle: {
                        backgroundColor: '#212521'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#ffffff',
                    },
                }}/>
            <Stack.Screen
                name="subj_ApprComp" component={subj_ApprovedList}
                options={{
                    title: 'Approved Subjects',
                    headerStyle: {
                        backgroundColor: '#212521'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#ffffff',
                    },
                }}/>
            <Stack.Screen
                name="subj_NonApprComp" component={subj_NonApprovedList}
                options={{
                    title: 'Non Approved Subjects',
                    headerStyle: {
                        backgroundColor: '#212521'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#ffffff',
                    },
                }}/>
        </Stack.Navigator>
    );

}
export default ActionStack;