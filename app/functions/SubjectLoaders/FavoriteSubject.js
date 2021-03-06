import {Text, View} from "react-native";
import ReadMore from "react-native-read-more-text";
import _renderTruncatedFooter from "./ReadMore/_renderTruncatedFooter";
import _renderRevealedFooter from "./ReadMore/_renderRevealedFooter";
import _handleTextReady from "./ReadMore/_handleTextReady";
import Hart from "./SubjectElements/HartButton";
import Company from "./SubjectElements/Company";
import React, {useState} from "react";

import styleSubjectList from "../../styles/styleSubjectList";
import Pdf from "./SubjectElements/Pdf";
import refreshToken from "../refreshToken";
import getAccessToken from "../getAccessToken";
import getFromStore from "../getFromStore";
import removeFirstAndLast from "../removeFirstAndLast";
import backendURL from "../../backendURL";
import axios from "axios";

const FavoriteSubject = ({subject}) => {
    const [favourite, setFavourite] = useState([]);
    const [isFav, setFav] = useState(false);
    React.useEffect(()=> {
        const getFavorites = async () => {
            await refreshToken();
            let id = await getFromStore("ownId");
            id = removeFirstAndLast(id)
            let token = await getAccessToken();
            let config = {
                method: 'get',
                url: backendURL + '/userManagement/users/' + id + '/favouriteSubjects',
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(token)
                }
            }
            axios(config)
                .then(function (response) {
                    console.log(response.data)
                    for(let i = 0; i<response.data.length; i++) {
                        if(response.data[i].id === subject.id) setFav(true)
                    }
                })
                .catch(function (error) {
                    console.log(error );
                });
        }
        getFavorites();
    },[])

    if(isFav) {
        return (
            <View style={styleSubjectList.subjectTotalBlock}>
                <Hart subject={subject}/>
                <Pdf subject={subject}/>
                <Text style={styleSubjectList.students}>
                    Students: {subject.nrOfStudents}
                </Text>
                <Text style ={styleSubjectList.title}>
                    {subject.name}
                </Text>
                <ReadMore
                    numberOfLines={3}
                    renderTruncatedFooter={_renderTruncatedFooter}
                    renderRevealedFooter={_renderRevealedFooter}
                    onReady={_handleTextReady}>
                    <Text style={styleSubjectList.shortDescription}>
                        {subject.description}
                    </Text>
                </ReadMore>
                <Company subject={subject}/>
            </View>
        );
    }
    else {
        return null;
    }

};

export default FavoriteSubject;