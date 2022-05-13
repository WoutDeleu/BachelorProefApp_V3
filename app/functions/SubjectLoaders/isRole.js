import * as SecureStore from 'expo-secure-store';
import {useContext} from "react";
import {AuthContext} from "../../Authentication/AuthProvider";
import jwt_decode from "jwt-decode";

const isRole = (r,userInfo)=>{

    let roles = null;
    if(userInfo.access_token!=='undefined'){
        const decoded = jwt_decode(userInfo.access_token);
        roles = decoded.roles;
        for(let i = 0; i < roles.length; i++){
            if(r===roles[i])return true;
        }
    }
    return false;
}

export default isRole;
