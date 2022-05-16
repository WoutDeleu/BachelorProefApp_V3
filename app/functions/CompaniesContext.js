import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {AuthContext} from "../Authentication/AuthProvider";


export const AcceptedCompanies = createContext();

export const AuthProvider = ({children}) => {
    const [change, setChange] = useState(false);

    const changeHappened = () => {
        setChange(true);
        SecureStore.setItemAsync('changeCompany', JSON.stringify(true))
    }
    const back = () => {
        setChange(false);
        SecureStore.setItemAsync('changeCompany', JSON.stringify(false))
    }

    useEffect(()=>{
        const update = async () => {
            const changed = await SecureStore.getItemAsync("changeCompany")
            setChange(change);
        }
    },[])

    return (
        <AuthContext.Provider
            value={{
                change,
                changeHappened,
                back
            }}>
            {children}
        </AuthContext.Provider>
    );
};