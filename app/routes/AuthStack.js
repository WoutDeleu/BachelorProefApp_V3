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
import getIsLoggedIn from "../functions/getIsLoggedIn";


const AuthStack = () => {
    const AuthStack = createNativeStackNavigator();
    const [isSignedIn, setSignedIn] = useState();
    const [loading, setLoading] = useState();
    const {userInfo, splashLoading} = useContext(AuthContext);
    const [expTime_at, setExpTime_at] = useState('');
    const [expTime_rt, setExpTime_rt] = useState('')

    const url_refresh = backendURL + "/authentication/token/refresh"
    React.useEffect(() => {
      const loggedIn = async () => {
        const t = await SecureStore.getItemAsync("access_token")
        const time = await SecureStore.getItemAsync("access_token_expired")
        // console.log(t);
        // console.log(time);

        const expTime_at = await SecureStore.getItemAsync('access_token_expired');
        const expTime_rt = await SecureStore.getItemAsync('refresh_token_expired');
        let curTime = new Date().getTime();
        if(expTime_at>curTime) {
            console.log("access token is geldig");
            console.log(t);
        }
        else {
            if(expTime_rt>curTime) {
              console.log("refresh tokeken is geldig");
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
                console.log(res.data.access_token)
              }).catch(function (error) {
              });
            }
            else {
              console.log("Access token en refresh token zijn ongeldig")
            }
          }
        }
      loggedIn()
    }, [])


    function rendFunc() {
        console.log("acccess token: "  + userInfo.access_token);
      return(
          <AuthStack.Navigator>
              {splashLoading ? (
                  <AuthStack.Screen
                      name="Splash Screen"
                      component={SplashScreen}
                      options={{headerShown: false}}
                  />
              ): userInfo.access_token? /*|| !getIsLoggedIn(userInfo.access_token, userInfo.refresh_token)?*/ (
                <AuthStack.Screen name="Tabs" component={Tabs} options={{headerShown : false}}/>
              ) : (
                <>
                  <AuthStack.Screen
                      name = "LoginScreen"
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
                      name = "ForgotPassword"
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

    return (
      rendFunc()
    );
  };


export default AuthStack;