import React, { useState } from "react";
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styleSubjectList from "../../../styles/styleSubjectList";
import refreshToken from "../../refreshToken";
import getAccessToken from "../../getAccessToken";
import getFromStore from "../../getFromStore";
import addToFavorites from "./addToFavorites";
import removeFromFavorites from "./removeFromFavorites";

const Hart = ({subject}) => {
    const [liked, setLiked] = useState(false);
    const [ownId, setOwnId] = useState('');
    const [token, setToken] = useState('');

    React.useEffect(()=> {
        const constructor = async () => {
            await refreshToken();

            let token = await getAccessToken();
            setToken(token);
            let ownId = await getFromStore("ownId");
            setOwnId(ownId);
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
        <Pressable style={styleSubjectList.heartIcon} onPress={() => checkFavorite() }>
            <MaterialCommunityIcons
                name={liked ? "heart" : "heart-outline"}
                size={20}
                color={liked ? "red" : "white"}
            />
        </Pressable>
    );
};

export default Hart;