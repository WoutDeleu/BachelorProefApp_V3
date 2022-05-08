import {Text,View} from "react-native";
import styleSubjectList from "../../../styles/styleSubjectList";

const Company = ({subject}) => {
    function getCompany(company) {

    }

    if(subject.company !== null) {
        return (
            <View>
                <Text style={styleSubjectList.students}>
                    {"\n"}
                    Company: {getCompany(subject.company)}
                </Text>
            </View>
        )
    }
    else return null;
}

export default Company;
