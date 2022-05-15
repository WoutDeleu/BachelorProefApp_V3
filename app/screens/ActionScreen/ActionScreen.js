import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styleSubjectList from "../../styles/styleSubjectList";
import {StatusBar} from "expo-status-bar";
import styleActions from "../../styles/styleActions";

function  ActionScreen({navigation}) {
    return(
        <View style={styleActions.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Users')}>
                <Text> USERS </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Subjects')}>
                <Text> SUBJECTS </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Companies')}>
                <Text> COMPANIES </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ActionScreen;