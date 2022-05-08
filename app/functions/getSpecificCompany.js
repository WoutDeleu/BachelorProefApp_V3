import * as SecureStore from "expo-secure-store";
import refreshToken from "./refreshToken";
import getAccessToken from "./getAccessToken";
import axios from "axios";
import {useState} from "@types/react";

const getSpecificCompany = async ({id}) => {
    await refreshToken();
    let token = await getAccessToken();
    let axios = require('axios');
    const [hasLoaded, setHasloaded] = useState(false);

    let config = {
        method: 'get',
        url: 'https://mastertoolbackend.herokuapp.com/userManagement/company/' + {id},
        headers: {
            'Authorization': 'Bearer ' + JSON.parse(token),
            ...data.getHeaders()
        },
        data : data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            setHasloaded(true)
        })
        .catch(function (error) {
            console.log(error);
        });
}
export default getSpecificCompany;