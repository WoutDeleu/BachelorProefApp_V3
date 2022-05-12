import React, { useState, useContext } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import styleLoginLogout from "../styles/styleLoginLogout"

import validateEmail from "../functions/ValidateEmail";

import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from "../Authentication/AuthProvider";

import { Root, Popup } from 'popup-ui';

function LoginScreen({navigation}, props) {
    const win = Dimensions.get('window');

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {isLoading, login} = useContext(AuthContext);


    return(
        <Root>
            <View style={styleLoginLogout.containerWhite}>
                <Spinner visible={isLoading}/>
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
                <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={()=>login(email,password)}>
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