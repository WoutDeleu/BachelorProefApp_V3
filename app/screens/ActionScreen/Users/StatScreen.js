import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import styleActions from "../../../styles/styleActions";
import React, {useState} from "react";
import getRoles from "../../../functions/getRoles";
import getCompanyName from "../../../functions/getCompanyName";
import refreshToken from "../../../functions/refreshToken";
import getAccessToken from "../../../functions/getAccessToken";
import styleLoginLogout from "../../../styles/styleLoginLogout";
import Spinner from "react-native-loading-spinner-overlay";
import backendURL from "../../../backendURL";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";


const StatScreen = () => {
    const [totalAm, setTotalAm] = useState();
    const [adm, setAdm] = useState();
    const [cor, setCor] = useState();
    const [prom, setProm] = useState();
    const [stud, setStud] = useState();
    const [cont, setCont] = useState();
    const [comp, setComp] = useState();
    const [nrOfNonApprovedCompanies, setNrOfNonApprovedCompanies] = useState();
    const [nrOfStudentsWithFinalSubject, setNrOfStudentsWithFinalSubject] = useState();

    const tabBarHeight = useBottomTabBarHeight();

    React.useEffect(()=>{
        const constructor = async () => {
            await refreshToken();
            const token = await getAccessToken();

            let axios = require('axios');

            let config = {
                method: 'get',
                url: backendURL + '/userManagement/users/stats',
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(token),
                }
            };

            axios(config)
                .then(function (r) {
                    console.log(r.data);
                    setTotalAm(r.data.totalAmount);
                    setAdm(r.data.nrOfAdmins);
                    setCor(r.data.nrOfCoordinators);
                    setProm(r.data.nrOfPromotors);
                    setStud(r.data.nrOfStudents);
                    setCont(r.data.nrOfContacts);
                    setComp(r.data.nrOfCompanies)
                    setNrOfNonApprovedCompanies(r.data.nrOfNonApprovedCompanies);
                    setNrOfStudentsWithFinalSubject(r.data.nrOfStudentsWithFinalSubject);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        constructor();
    })
    // console.log("tabBarHeight"  + tabBarHeight)
    return (
            <ScrollView style={{marginBottom: tabBarHeight}}>
                <View style = {styleLoginLogout.viewLine}/>


                <View style={styleLoginLogout.infoLine}>
                    <Text style={styleLoginLogout.tag}>{"\t\t"} Total Amount Of Students: {totalAm}</Text>
                </View>

                <View style = {styleLoginLogout.viewLine}/>

                <View style={styleLoginLogout.infoLine}>
                    <Text style={styleLoginLogout.tag}>{"\t\t"} Nr. Of Admins: {adm}</Text>
                </View>

                <View style = {styleLoginLogout.viewLine}/>

                <View style={styleLoginLogout.infoLine}>
                    <Text style={styleLoginLogout.tag}>{"\t\t"} Nr. Of Coordinators: {cor}</Text>
                </View>

                <View style = {styleLoginLogout.viewLine}/>

                <View style={styleLoginLogout.infoLine}>
                    <Text style={styleLoginLogout.tag}>{"\t\t"} Nr. Of Promotors: {prom}</Text>
                </View>

                <View style = {styleLoginLogout.viewLine}/>

                <View style={styleLoginLogout.infoLine}>
                    <Text style={styleLoginLogout.tag}>{"\t\t"} Nr. Of Students: {stud}</Text>
                </View>

                <View style = {styleLoginLogout.viewLine}/>

                <View style={styleLoginLogout.infoLine}>
                    <Text style={styleLoginLogout.tag}>{"\t\t"} Total Nr. Of Companies: {comp}</Text>
                </View>

                <View style = {styleLoginLogout.viewLine}/>

                <View style={styleLoginLogout.infoLine}>
                    <Text style={styleLoginLogout.tag}>{"\t\t"} Nr. Of Non-Approved Companies: {nrOfNonApprovedCompanies}</Text>
                </View>

                <View style = {styleLoginLogout.viewLine}/>

                <View style={styleLoginLogout.infoLine}>
                    <Text style={styleLoginLogout.tag}>{"\t\t"} Nr. Of Students With Final Subj.: {nrOfStudentsWithFinalSubject}</Text>
                </View>
            </ScrollView>

    );
}

export default StatScreen;