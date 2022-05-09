import React, { useRef, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, Dimensions, AsyncStorage } from 'react-native';
import axios from "axios";
import styleLoginLogout from "../styles/styleLoginLogout"

import save from "../functions/save"
import reloadApp from "../functions/reloadApp"
import validateEmail from "../functions/ValidateEmail";


import { Root, Popup } from 'popup-ui';
import jwt_decode from 'jwt-decode';
import qs from "qs";
import useAuth from '../hooks/useAuth';
import saveOwnId from "../functions/saveOwnId";
import backendURL from "../backendURL";

function LoginScreen({navigation}, props) {
    const win = Dimensions.get('window');

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { auth, setAuth } = useAuth();
    const [errMsg, setErrMsg] = useState('');


    const logInCheck = async (e) => {
        e.preventDefault();
        const url_login = backendURL + "/authentication/login";
        const data = qs.stringify({email, password});
        console.log(email);
        const config = {
            method: 'post',
            url: url_login,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            },
            data: data
        };
        axios(config).then(function(res){
            //console.log(res.data);
            const decoded = jwt_decode(res.data.access_token);
            const roles = decoded.roles;

            save("access_token", JSON.stringify(res.data.access_token));
            save("refresh_token", JSON.stringify(res.data.refresh_token));
            save("role", JSON.stringify(roles));
            save("isLoggedIn", JSON.stringify(true));

            const time = new Date().getTime();//getTime gives the amount of millieseconds that have passed since January 1st 1970
            const access_token_expired = new Date(time + 10 * 60 * 1000).getTime();
            const refresh_token_expired = new Date(time + 24 * 60 * 60 * 1000).getTime();
            save("access_token_expired", JSON.stringify(access_token_expired));
            save("refresh_token_expired", JSON.stringify(refresh_token_expired));
            saveOwnId();

            console.log("Ingelogd");
            reloadApp();

        }).catch(function (error) {
            console.log(error.response?.status)
            if(error.response?.status === 401) {
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
            else if (!error?.response) {
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
            //errRef.current.focus();
        });

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return(
        <Root>
            <View style={styleLoginLogout.containerWhite}>
                <Image
                    source={require('../../assets/pics/KUL_FullLogo.png')}
                    style={{
                        width: win.width/2,
                        height: (win.width/2646)*670,
                        resizeMode: "contain",
                        alignSelf: "center",
                        borderWidth: 1,
                        backgroundColor: "transparent"
                        //borderRadius: 20,
                    }}
                />

                <View style={styleLoginLogout.inputRoundedRectangle}>
                    <TextInput
                        autoComplete={email}
                        type={email}
                        style={styleLoginLogout.inputPlaceholderText}
                        placeholder="Email..."
                        placeholderTextColor="#212521"
                        onChangeText={text => {
                            validateEmail(text);
                            setEmail(text);
                        }}
                    />
                </View>
                <View style={styleLoginLogout.inputRoundedRectangle} >
                    <TextInput
                        secureTextEntry
                        style={styleLoginLogout.inputPlaceholderText}
                        placeholder="Password..."
                        placeholderTextColor="#212521"
                        onChangeText={text => setPassword(text)}/>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate('ForgotPassword')}}>
                    <Text style={styleLoginLogout.forgotPasswordFont}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={logInCheck}>
                    <Text style={styleLoginLogout.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styleLoginLogout.forgotPasswordFont}>
                        Register as a company?
                    </Text>
                </TouchableOpacity>
            </View>
        </Root>
    )
}

export default LoginScreen;