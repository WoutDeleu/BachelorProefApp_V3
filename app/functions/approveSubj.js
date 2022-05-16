import React, {useContext} from "react";
import {AuthContext} from "../Authentication/AuthProvider";
import refreshToken from "./refreshToken";
import getAccessToken from "./getAccessToken";
import backendURL from "../backendURL";
import formData from "form-data";
import qs from "qs";
import axios from "axios";

const approveSubj = async (id) => {
    await refreshToken();
    let token = await getAccessToken();
    console.log(backendURL + '/userManagement/Subj/' + id + '/setApproved');
    console.log("token" + token);


    let axios = require('axios');
    let FormData = require('form-data');
    let data = new FormData();
    data.append('approved', 'true');
    console.log(id);

    let config = {
        method: 'put',
        url: backendURL + '/subjectManagement/subjects/' + id + '/setApproved',
        headers: {
            'Authorization': 'Bearer ' + JSON.parse(token),
        },
        data : data
    };
    axios(config)
        .then(function (response) {
        })
        .catch(function (error) {
            console.log(error);
        });




}

export default approveSubj;
