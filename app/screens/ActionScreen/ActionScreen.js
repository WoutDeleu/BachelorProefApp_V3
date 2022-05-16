import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styleSubjectList from "../../styles/styleSubjectList";
import {StatusBar} from "expo-status-bar";
import styleActions from "../../styles/styleActions";
import styleLoginLogout from "../../styles/styleLoginLogout";
import isRole from "../../functions/isRole";
import {useContext} from "react";
import {AuthContext} from "../../Authentication/AuthProvider";

function Stats({navigation}) {
    const {userInfo} = useContext(AuthContext)
    if(isRole("ROLE_PROMOTOR", userInfo)) return null;
    else return (
        <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={() => navigation.navigate('Stats')}>
            <Text style={styleLoginLogout.loginText}> STATS </Text>
        </TouchableOpacity>
    )    
}

function  ActionScreen({navigation}) {
    const {userInfo} = useContext(AuthContext)
    if(isRole("ROLE_ADMIN", userInfo) || isRole("ROLE_COORDINATOR", userInfo) || isRole("ROLE_PROMOTOR", userInfo)) {
        return (
            <View style={styleActions.container}>
                <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={() => navigation.navigate('Users')}>
                    <Text style={styleLoginLogout.loginText}> USERS </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={() => navigation.navigate('Subjects')}>
                    <Text style={styleLoginLogout.loginText}> SUBJECTS </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={() => navigation.navigate('Companies')}>
                    <Text style={styleLoginLogout.loginText}> COMPANIES </Text>
                </TouchableOpacity>
                <Stats navigation={navigation}/>
            </View>
        )
    }
    else {
        return (
            <View style={styleActions.container}>
                <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={() => navigation.navigate('Companies')}>
                    <Text style={styleLoginLogout.loginText}> COMPANIES </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ActionScreen;