// import React, {useContext} from "react";
// import {AuthContext} from "../Authentication/AuthProvider";
// import refreshToken from "./refreshToken";
// import getAccessToken from "./getAccessToken";
// import backendURL from "../backendURL";
// import * as FormData from 'form-data'
//
// const approveCompany = async (id) => {
//     await refreshToken();
//     let token = await getAccessToken();
//
//     let myHeaders = new Headers();
//     myHeaders.append("Authorization", "Bearer " + token);
//
//     let FormData = require('form-data');
//     let formdata = new FormData();
//     formdata.append("approved", "true");
//
//     let requestOptions = {
//         method: 'PUT',
//         headers: myHeaders,
//         body: formdata,
//         redirect: 'follow'
//     };
//
//     fetch("https://mastertoolbackend.herokuapp.com/userManagement/company/"+ id +"/setApproved", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log("hahaha"))
//         .catch(error => console.log('error', error));
//
//     // let axios = require('axios');
//     // let FormData = require('form-data');
//     // let data = new FormData();
//     // data.append('approved', 'true');
//     //
//     // let config = {
//     //     method: 'put',
//     //     url: backendURL + '/userManagement/company/'+id+'/setApproved',
//     //     headers: {
//     //         'Authorization': 'Bearer ' + JSON.parse(token),
//     //         ...data.getHeaders()
//     //     },
//     //     data : data
//     // };
//     //
//     //
//     // axios(config)
//     //     .then(function (response) {
//     //         console.log(JSON.stringify(response.data));
//     //         console.log("done");
//     //     })
//     //     .catch(function (error) {
//     //         console.log(error);
//     //     });
//
//
//     // let axios = require('axios');
//     // let FormData = require('form-data');
//     // let data = new FormData();
//     // data.append('approved', 'true');
//     // console.log(backendURL + '/userManagement/company/'+id+'/setApproved')
//     //
//     // let config = {
//     //     method: 'put',
//     //     url: backendURL + '/userManagement/company/'+id+'/setApproved',
//     //     headers: {
//     //         'Authorization': 'Bearer ' + JSON.parse(token),
//     //     },
//     //     data : data
//     // };
//     //
//     // axios(config)
//     //     .then(function (response) {
//     //         console.log(JSON.stringify(response.data));
//     //         console.log("approved")
//     //     })
//     //     .catch(function (error) {
//     //         console.log(error);
//     //     });
//
//
//
//
// }
//
// export default approveCompany;
