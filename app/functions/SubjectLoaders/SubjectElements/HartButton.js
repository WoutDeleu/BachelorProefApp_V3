import React, { useState } from "react";
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styleSubjectList from "../../../styles/styleSubjectList";

const Hart = () => {
    const [liked, setLiked] = useState(false);

    return (
        <Pressable style={styleSubjectList.heartIcon} onPress={() => setLiked((isLiked) => !isLiked) }>
            <MaterialCommunityIcons
                name={liked ? "heart" : "heart-outline"}
                size={20}
                color={liked ? "red" : "white"}
            />
        </Pressable>
    );
};

export default Hart;