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
            <Stack.Screen name= "Home" component={ActionScreen} options= {{headerShown: false}}/>

            <Stack.Screen name= "Users" component={UserScreen}/>
            <Stack.Screen name= "Students" component={StudentList}/>
            <Stack.Screen name= "Coordinators" component={CoordinatorsList}/>
            <Stack.Screen name= "Admin" component={AdminList}/>
            <Stack.Screen name= "Promotors" component={PromotorList}/>
            <Stack.Screen name= "Contacts" component={ContactList}/>

            <Stack.Screen name="Companies" component={CompaniesScreen}/>
            <Stack.Screen name="comp_ApprComp" component={comp_ApprovedList}/>
            <Stack.Screen name="comp_NonApprComp" component={comp_NonApprovedList}/>

            <Stack.Screen name="Subjects" component={SubjectsScreen}/>
            <Stack.Screen name="subj_ApprComp" component={subj_ApprovedList}/>
            <Stack.Screen name="subj_NonApprComp" component={subj_NonApprovedList}/>

        </Stack.Navigator>
    );

}
export default ActionStack;