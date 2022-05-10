import {StatusBar, StyleSheet} from 'react-native';

const styleSubjectList =  StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:"center"
    },
    plusbutton: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        top:580,
        alignItems:'center',
        justifyContent:'center',
        width:40,
        height:40,
        backgroundColor:'#212521',
        borderRadius:50,
        zIndex: 1
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subjectTotalBlock: {
        backgroundColor: "#212521",
        width: 350,
        height: 'auto',
        borderWidth: 2,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems:"center",
        alignSelf: 'flex-start',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        color: "#ffff",
        fontWeight: 'bold',
        textDecorationStyle : 'solid',
        fontSize: 20,
        justifyContent: 'center',alignItems:"center"
    },
    students: {
        color: "#ffffff",
        fontStyle: 'italic',
        justifyContent: 'center',alignItems:"center"
    },
    shortDescription: {
        color: '#C0C0C0',
        justifyContent: 'center',alignItems:"center"

    },
    heartIcon: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    pdf: {
        position: 'absolute',
        right: 10,
        bottom: 10
    },

});

export default styleSubjectList;