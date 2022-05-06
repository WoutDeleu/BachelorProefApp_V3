import React, { useState } from "react";
import { View,Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SubjectListScreen from "../screens/SubjectListScreen";
//import AddSubject from "../screens/AddSubject";

const SubjectStack = () => {
    const SubjectStack = createNativeStackNavigator();


    return (
      <SubjectStack.Navigator
        screenOptions={{
            headerShown: false
        }}
      >
          <SubjectStack.Screen
              name="SubjectList"
              component={SubjectListScreen}
          />
          {/*<SubjectStack.Screen*/}
          {/*    name="AddSubject"*/}
          {/*    component={AddSubject}*/}
          {/*/>*/}
      </SubjectStack.Navigator>
    );
}
export default SubjectStack;