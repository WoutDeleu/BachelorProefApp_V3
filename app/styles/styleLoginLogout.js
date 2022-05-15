import {StatusBar, StyleSheet} from 'react-native';

const styleLoginLogout =  StyleSheet.create({
    //LOGIN
    containerWhite: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        //borderTopLeftRadius:25,
        //borderTopRightRadius:25,
    },
    inputRoundedRectangle:{
        width:"80%",
        backgroundColor:"#fff",
        borderRadius:25,
        borderColor:"#212521",
        borderWidth:2,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputPlaceholderText:{
        height:50,
        color:"black"
    },
    forgotPasswordFont:{
        color:"black",
        fontSize:14
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#212521",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    loginText:{
        color:"white"
    },

    //LOGOUT
    basicContainer:{
        marginTop: StatusBar.currentHeight || 0,
        alignItems: 'center'
    },
    infoLine:{
        alignSelf:"flex-start",
    },
    tag:{
        fontSize:20,
        fontWeight: "bold",
        fontFamily: "Roboto"
    },

    prop:{
        position: 'absolute',
        left: 135,
        fontStyle: 'italic',
        fontSize:18,
    },
    propEmail:{
        position: 'absolute',
        left: 135,
        fontStyle: 'italic',
        fontSize:14,
    },
    viewLine: {
        borderBottomColor: "black",
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignSelf:'center',
        width: "85%",
        marginTop: 20,
        marginBottom: 20,

    }
});

export default styleLoginLogout;