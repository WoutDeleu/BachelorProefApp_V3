import { StyleSheet } from 'react-native';

const styleLogin =  StyleSheet.create({

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
    }
});

export default styleLogin;