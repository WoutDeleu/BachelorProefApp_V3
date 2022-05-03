import React, { useState, useReducer } from "react";
import { createStore } from 'redux';
import { View,Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen";
import * as SecureStore from 'expo-secure-store';
import axios from "axios";
import Tabs from "./Tabs";
import store from "./store";
import ForgotPasswordScreen from "../screens/ForgotPassword";

const AuthStack = () => {
    const AuthStack = createNativeStackNavigator();
    const [isSignedIn, setSignedIn] = useState();
    const [loading, setLoading] = useState();

    const ipKot = "192.168.20.181";
    const portNr = "8081";
    const url_refresh = "http://" + ipKot + ":" + portNr + "/authentication/token/refresh";
    React.useEffect(() => {
      const loggedIn = async () => {
        const t = await SecureStore.getItemAsync("access_token")
        const time = await SecureStore.getItemAsync("access_token_expired")
        // console.log(t);
        // console.log(time);

        let expTime_at = await SecureStore.getItemAsync('access_token_expired');
        let expTime_rt = await SecureStore.getItemAsync('refresh_token_expired');
        let curTime = new Date().getTime();

        if(t === null) setSignedIn(false);
        else {
          if(expTime_at>curTime) {
            setSignedIn(true);
            console.log("access token is geldig");
            console.log(t);
            store.dispatch({type : 'login'})
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
              setSignedIn(true);
              store.dispatch({type : 'login'})
            }
            else {
              setSignedIn(false);
              store.dispatch({type: 'logout'})
              console.log("Access token en refresh token zijn ongeldig")
            }
          }
        }
      }
      loggedIn()
    }, [])


    if (isSignedIn === undefined) {
      //Maak hier een loading van
      return null;
    }

    function rendFunc() {
      console.log(store.getState());
      return(
          <AuthStack.Navigator>
            {!store.getState()? (
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

  store.subscribe(rendFunc);
  };


export default AuthStack;