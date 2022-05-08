import * as SecureStore from "expo-secure-store";
import axios from "axios";
import save from "./save";
import React from "react";
import refreshToken from "./refreshToken";

const saveOwnId = async () => {
    React.useEffect(() => {
        const loggedIn = async () => {
            await refreshToken();
        }
        loggedIn()
    }, [])


    const axios = require('axios');

    let config = {
        method: 'get',
        url: 'https://mastertoolbackend.herokuapp.com/userManagement/users/ownId',
        headers: {
            'Authorization': 'Bearer ' + JSON.parse(await SecureStore.getItemAsync("access_token"))
        }
    };

    axios(config)
        .then(function (response) {
            save("ownId",JSON.stringify(response.data))
        })
        .catch(function (error) {
            console.log(error);
        });

}

export default saveOwnId;