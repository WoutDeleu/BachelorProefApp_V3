import { StyleSheet } from 'react-native';

const styleSubjectList =  StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:"center"
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
        color: "#ffff",
        fontStyle: 'italic',
        justifyContent: 'center',alignItems:"center"
    },
    shortDescription: {
        color: '#C0C0C0',
        justifyContent: 'center',alignItems:"center"

    }
});

export default styleSubjectList;