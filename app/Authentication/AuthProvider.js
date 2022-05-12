import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import BackendURL from "../backendURL";
import {Popup} from "popup-ui";
import qs from "qs";
import jwt_decode from 'jwt-decode';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const login = (email, password) => {
        setIsLoading(true);
        const url_login = BackendURL + "/authentication/login";
        const data = qs.stringify({email, password});
        const config = {
            method: 'post',
            url: url_login,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            },
            data: data
        };
        axios(config).then(res => {
            let userInfo = res.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            SecureStore.setItemAsync('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);

            const decoded = jwt_decode(res.data.access_token);
            const roles = decoded.roles;
            console.log("ownId: " + res.data.id)

            SecureStore.setItemAsync("access_token", JSON.stringify(res.data.access_token));
            SecureStore.setItemAsync("refresh_token", JSON.stringify(res.data.refresh_token));
            SecureStore.setItemAsync("ownId", JSON.stringify(res.data.id))
            // SecureStore.setItemAsync("role", JSON.stringify(roles));

            const time = new Date().getTime();//getTime gives the amount of millieseconds that have passed since January 1st 1970
            const access_token_expired = new Date(time + 10 * 60 * 1000).getTime();
            const refresh_token_expired = new Date(time + 24 * 60 * 60 * 1000).getTime();
            SecureStore.setItemAsync("access_token_expired", JSON.stringify(access_token_expired));
            SecureStore.setItemAsync("refresh_token_expired", JSON.stringify(refresh_token_expired));

        })
            .catch(e => {
                console.log(`login error ${e}`);
                setIsLoading(false);
                if(e.response?.status === 401) {
                    setErrMsg('LoginScreen Failed');
                    Popup.show({
                        type: 'Danger',
                        title: 'Password/Username are incorrect',
                        button: true,
                        textBody: 'Your password and/or username are incorrect. Please try again ',
                        buttontext: 'Ok',
                        callback: () => Popup.hide()
                    })
                }
                else if (!e?.response) {
                    setErrMsg('No Server Response');
                    console.log(errMsg);
                }
                else {
                    setErrMsg('No Server Response');
                    Popup.show({
                        type: 'Warning',
                        title: 'Server Error',
                        button: true,
                        textBody: 'Server error, try again later ',
                        buttontext: 'Ok',
                        callback: () => Popup.hide()
                    })
                }
            });
    };

    const logout = () => {
        setIsLoading(true);
        console.log("logout");
        SecureStore.deleteItemAsync('userInfo').then(
            SecureStore.deleteItemAsync("access_token"),
            SecureStore.deleteItemAsync("refresh_token"),
            SecureStore.deleteItemAsync("access_token_expired"),
            SecureStore.deleteItemAsync("refresh_token_expired"),
            SecureStore.deleteItemAsync("role"),
            SecureStore.deleteItemAsync("ownId"),
            SecureStore.deleteItemAsync("userInfo"))
        setUserInfo({});
        setIsLoading(false);

    };

    const isLoggedIn = async () => {
        try {
            setSplashLoading(true);

            let userInfo = await SecureStore.getItemAsync('userInfo');
            userInfo = JSON.parse(userInfo);

            if (userInfo) {
                setUserInfo(userInfo);
            }

            setSplashLoading(false);
        } catch (e) {
            setSplashLoading(false);
            console.log(`is logged in error ${e}`);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                userInfo,
                splashLoading,
                login,
                logout,
            }}>
            {children}
        </AuthContext.Provider>
    );
};