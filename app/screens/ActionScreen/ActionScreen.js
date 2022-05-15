import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styleSubjectList from "../../styles/styleSubjectList";
import {StatusBar} from "expo-status-bar";
import styleActions from "../../styles/styleActions";
import styleLoginLogout from "../../styles/styleLoginLogout";

function  ActionScreen({navigation}) {
    return(
        <View style={styleActions.container}>
            <TouchableOpacity style={styleLoginLogout.loginBtn} onPress={() => navigation.navigate('Users')}>
                <Text style={styleLoginLogout.loginText}> USERS </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleLoginLogout.loginBtn}  onPress={() => navigation.navigate('Subjects')}>
                <Text style={styleLoginLogout.loginText}> SUBJECTS </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleLoginLogout.loginBtn}  onPress={() => navigation.navigate('Companies')}>
                <Text style={styleLoginLogout.loginText}> COMPANIES </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ActionScreen;