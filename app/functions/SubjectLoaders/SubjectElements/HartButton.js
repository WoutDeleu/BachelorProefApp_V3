import React, {useContext, useState} from "react";
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
import {AuthContext} from "../../../Authentication/AuthProvider";
import isRole from "../../isRole";

const Hart = ({subject}) => {
    const { userInfo } = useContext(AuthContext);
    const [liked, setLiked] = useState(false);
    const [hasloaded,setHasloaded] = useState(false);
    const [ownId, setOwnId] = useState('');
    const [token, setToken] = useState('');
    const [favourite, setFavourite] = useState([]);
    const favouriteId = [];

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
                        if(response.data[i].id === subject.id) setLiked(true)
                    }
                })
                .catch(function (error) {
                    console.log(error );
                });
        }
        getFavorites().then(() => {
            setHasloaded(true);
        }).catch(e=>console.log(e));
    },[])


    const checkFavorite = () => {
        setLiked((isLiked) => !isLiked)
        if(liked) {
            console.log("verwijderen uit favorieten");
            removeFromFavorites(subject,ownId, token);
        }
        else {
            console.log("toevoegen aan favorieten");
            addToFavorites(subject,ownId,token);
        }
    }
    // console.log(favourite)
    if(!hasloaded || isRole("ROLE_COORDINATOR",userInfo) || isRole("ROLE_PROMOTOR",userInfo) || isRole("ROLE_CONTACT",userInfo) || isRole("ROLE_ADMIN",userInfo)) return null;
    else{
        return (
            <Pressable style={styleSubjectList.heartIcon} onPress={ () => checkFavorite()}>
                <MaterialCommunityIcons
                    name={liked ? "heart" : "heart-outline"}
                    size={20}s
                    color={liked ? "red" : "white"}
                />
            </Pressable>
        );
    }
};

export default Hart;