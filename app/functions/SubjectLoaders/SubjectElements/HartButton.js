import React, { useState } from "react";
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styleSubjectList from "../../../styles/styleSubjectList";
import refreshToken from "../../refreshToken";
import getAccessToken from "../../getAccessToken";
import getFromStore from "../../getFromStore";
import addToFavorites from "./addToFavorites";
import removeFromFavorites from "./removeFromFavorites";
import backendURL from "../../../backendURL";
import axios from "axios";
import removeFirstAndLast from "../../removeFirstAndLast";

const Hart = ({subject}) => {
    const [liked, setLiked] = useState(false);
    const [ownId, setOwnId] = useState('');
    const [token, setToken] = useState('');
    const [favourite, setFavourite] = useState([]);
    const favouriteId = [];

    React.useEffect(()=> {
        const constructor = async () => {
            await refreshToken();

            let token = await getAccessToken();
            setToken(token);
            let id = await getFromStore("ownId");
            id = removeFirstAndLast(id)
            setOwnId(id)

            const axios = require('axios');
            const config = {
                method: 'get',
                url: backendURL + '/userManagement/users/' + id,
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(token)
                }
            };

            axios(config)
                .then(function (response) {
                    setFavourite(response.data.favouriteSubjects)
                    console.log(response.data.favouriteSubjects)
                })
                .catch(function (error) {
                    console.log(error);
                });

            for(let i = 0; i<favourite.length; i++) {
                favouriteId.push(favourite[i].id)
            }
            if(favouriteId.includes(subject.id)) {
                console.log("idFrav: " + subject.id);
                setLiked(true);
            }
        }
        constructor();
    },[])


    const checkFavorite = () => {
        setLiked((isLiked) => !isLiked)
        if(liked) {
            console.log("verwijderen uit favorieten");
            removeFromFavorites(subject,ownId, token);
        }
        else {
            console.log("toevoegen aan favorieten");
            addToFavorites(subject,ownId, token);
        }
    }

    return (
        <Pressable style={styleSubjectList.heartIcon} onPress={() => checkFavorite()}>
            <MaterialCommunityIcons
                name={liked ? "heart" : "heart-outline"}
                size={20}
                color={liked ? "red" : "white"}
            />
        </Pressable>
    );
};

export default Hart;