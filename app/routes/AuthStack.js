import React, {useState, useReducer, useContext} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen";
import * as SecureStore from 'expo-secure-store';
import axios from "axios";
import Tabs from "./Tabs";
import ForgotPasswordScreen from "../screens/ForgotPassword";
import backendURL from "../backendURL";
import {AuthContext} from "../Authentication/AuthProvider";
import SplashScreen from "../screens/SplashScreen";
// import getIsLoggedIn from "../functions/getIsLoggedIn";
import tokenIsNotExpired from "../functions/tokenIsNotExpired";
import refreshToken from "../functions/refreshToken";
import getAccessToken from "../functions/getAccessToken";


const AuthStack = () => {
    const AuthStack = createNativeStackNavigator();
    const [isSignedIn, setSignedIn] = useState();
    const [loading, setLoading] = useState();
    const { userInfo, splashLoading } = useContext(AuthContext);

    React.useEffect(()=> {
        const constructor = async () => {
            // await refreshToken();
        }
        constructor();
    },[])

    return (
        <AuthStack.Navigator>
            {splashLoading ? (
                <AuthStack.Screen
                    name="Splash Screen"
                    component={SplashScreen}
                    options={{headerShown: false}}
                />
            ):
            userInfo.access_token ? (
                <AuthStack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
            ) : (
                <>
                    <AuthStack.Screen
                        name="LoginScreen"
                        component={LoginScreen}
                        options={{
                            title: 'Log In',
                            headerStyle: {
                                backgroundColor: '#212521'
                            },
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                color: '#ffffff',
                            },
                            animationTypeForReplace: isSignedIn ? 'pop' : 'push',
                        }}
                    />
                    <AuthStack.Screen
                        name="ForgotPassword"
                        component={ForgotPasswordScreen}
                        options={{
                            title: 'ForgotPassword',
                            headerStyle: {
                                backgroundColor: '#212521'
                            },
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                color: '#ffffff',
                            },
                            animationTypeForReplace: isSignedIn ? 'pop' : 'push',
                        }}
                    />
                </>
            )
            }
        </AuthStack.Navigator>
    );
}


export default AuthStack;