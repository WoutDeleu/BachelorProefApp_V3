import React, {useContext} from "react";
import {AuthContext} from "../Authentication/AuthProvider";
import refreshToken from "./refreshToken";
import getAccessToken from "./getAccessToken";
import backendURL from "../backendURL";
import * as FormData from 'form-data'
import qs from "qs";
import axios from "axios";

const approveCompany = async (id) => {
    await refreshToken();
    let token = await getAccessToken();

    let axios = require('axios');
    let qs = require('qs');
    let data = qs.stringify({
        'approved': true,
    });
    let config = {
        method: 'post',
        url: backendURL + '/userManagement/users/student/favouriteSubject',
        headers: {
            'Authorization': 'Bearer ' + JSON.parse(token),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
    };
    axios(config)
        // .then(function (response) {
        //     console.log(JSON.stringify(response.data));
        // })
        .catch(function (error) {
            console.log(error);
        });
}

export default approveCompany;
