import {Modal, Text, TouchableOpacity, View} from "react-native";
import styleSubjectList from "../../../styles/styleSubjectList";
import {useState} from "react";
import {Alert} from "native-base";

const Company = ({subject}) => {
    const [modalVisible, setModalVisible] = useState(false);


    if(subject.company !== null) {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <Text>Name: {"\t\t"} {subject.company.name}</Text>
                        <Text>Address: {"\t\t"} {subject.company.address}</Text>
                        <Text>btw: {"\t\t"} {subject.company.btwNr}</Text>
                        <Text>contacts: {"\t\t"} {subject.company.contacts}</Text>
                        <Text>Short descr.: {"\t\t"} {subject.company.description}</Text>
                    </TouchableOpacity>
                </Modal>
                <TouchableOpacity onPress={setModalVisible(true)}>
                    <Text style={styleSubjectList.students}>
                        {"\n"}
                        Company: {subject.company.name}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    else return null;
}

export default Company;
