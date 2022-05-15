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
import ApprovedList from "./Companies/ApprovedList";
import NonApprovedList from "./Companies/NonApprovedList";
// import SubjectsScreen from "./Subjects/SubjectsScreen";


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
            <Stack.Screen name="ApprComp" component={ApprovedList}/>
            <Stack.Screen name="NonApprComp" component={NonApprovedList}/>

            {/*<Stack.Screen name="SubjectsScreen" component={SubjectsScreen}/>*/}
        </Stack.Navigator>
    );

}
export default ActionStack;