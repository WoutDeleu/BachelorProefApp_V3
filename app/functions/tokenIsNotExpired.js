import * as SecureStore from "expo-secure-store";
import axios from "axios";
import {useContext, useState} from "react";
import {AuthContext} from "../Authentication/AuthProvider";
import backendURL from "../backendURL";
import {getItemAsync} from "expo-secure-store";


const tokenIsNotExpired = (expTime_at,expTime_rt) => {
    const refresh = getItemAsync("refresh_token")
    const url_refresh = backendURL + "/authentication/token/refresh"
    let curTime = new Date().getTime();
    console.log("currtime: " +curTime);
    console.log("expTime_at: " + expTime_at);
    if(expTime_at>curTime) {
        console.log("access token is geldig");
        return true;
    }
    else {
        if(expTime_rt>curTime) {
            console.log("refresh tokeken is geldig");
            let config = {
                method: 'get',
                url: url_refresh,
                headers:{
                    'Authorization': 'Bearer ' + JSON.parse(refresh)
                }
            }
            axios(config).then(function(res){
                SecureStore.setItemAsync("access_token", JSON.stringify(res.data.access_token));
                let time = new Date().getTime();//getTime gives the amount of millieseconds that have passed since January 1st 1970
                let access_token_expired = new Date(time + 10*60*1000).getTime();
                SecureStore.setItemAsync("access_token_expired", JSON.stringify(access_token_expired));
                console.log(res.data.access_token)
                return true;
                }).catch(function (error) {
            });
        }
        else {
            console.log("Access token en refresh token zijn ongeldig")
            return false
        }
    }


}

export default tokenIsNotExpired;