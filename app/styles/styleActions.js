import {StyleSheet} from "react-native";
import Constants from "expo-constants";

const styleActions = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffffff',
        alignContent: "center",
        alignItems: "center",
        justifyContent:"center",
        paddingTop: Constants.statusBarHeight,
    },
    containerGlobal: {
        flex: 1,
        backgroundColor: '#ffffffff',
        alignContent: "center",
        alignItems: "center",
        justifyContent:"center",
        paddingTop: Constants.statusBarHeight,
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
        marginTop:20
    },
    header: {
        backgroundColor: '#ffffff',
        padding: 10,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
    },
    content: {
        padding: 40,
        backgroundColor: '#ffffffff',
        justifyContent: "center"
    },
    active: {
        backgroundColor: '#D3D3D3',
    },
    inactive: {
        backgroundColor: '#ffffffff',
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#ffffffff',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
    },
    multipleToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        alignItems: 'center',
    },
    multipleToggle__title: {
        fontSize: 16,
        marginRight: 8,
    },
    prop:{
        fontSize:15,
        fontFamily: "Roboto",
        fontStyle: "italic"
    },
    tag:{
        fontSize:15,
        fontFamily: "Roboto"
    },
    //


});

export default styleActions;