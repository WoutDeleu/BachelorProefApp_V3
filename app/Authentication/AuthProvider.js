import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import BackendURL from "../backendURL";
import {Popup} from "popup-ui";
import qs from "qs";
import jwt_decode from 'jwt-decode';
import backendURL from "../backendURL";
import {decrypt, encrypt} from "./Encryption";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({});
    const [roles,setRoles] = useState({});
    const [expTime_at, setExpTime_at] = useState('');
    const [expTime_rt, setExpTime_rt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const login = (email, password) => {
        setIsLoading(true);
        const url_login = BackendURL + "/authentication/login";

        //TODO => Encryptie aanzetten
        // password = encrypt(password);

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

            const time = new Date().getTime();//getTime gives the amount of millieseconds that have passed since January 1st 1970
            const access_token_expired = new Date(time + 10 * 60 * 1000).getTime();
            const refresh_token_expired = new Date(time + 24 * 60 * 60 * 1000).getTime();

            setUserInfo(userInfo);
            setExpTime_at(access_token_expired);
            setExpTime_rt(refresh_token_expired)
            setIsLoading(false);

            const decoded = jwt_decode(res.data.access_token);
            const roles = decoded.roles;

            SecureStore.setItemAsync('userInfo', JSON.stringify(userInfo));
            SecureStore.setItemAsync("access_token", JSON.stringify(res.data.access_token));
            SecureStore.setItemAsync("refresh_token", JSON.stringify(res.data.refresh_token));
            SecureStore.setItemAsync("ownId", JSON.stringify(res.data.id));
            SecureStore.setItemAsync("roles" , JSON.stringify(roles));

            SecureStore.setItemAsync("access_token_expired", JSON.stringify(access_token_expired));
            SecureStore.setItemAsync("refresh_token_expired", JSON.stringify(refresh_token_expired));
            }
        ).catch(e => {
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
            SecureStore.deleteItemAsync("roles"),
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

            let accessTokenExp = await SecureStore.getItemAsync("access_token_expired")
            let refreshTokenExp = await SecureStore.getItemAsync("refresh_token_expired")
            let roles = await SecureStore.getItemAsync("roles")

            if (userInfo) {
                setUserInfo(userInfo);
            }
            if(refreshTokenExp) {
                setExpTime_rt(refreshTokenExp)
            }
            if(accessTokenExp) {
                setExpTime_at(accessTokenExp)
            }
            if(roles) {
                setRoles(roles)
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
                expTime_at,
                expTime_rt,
                login,
                logout,
                roles,
            }}>
            {children}
        </AuthContext.Provider>
    );
};