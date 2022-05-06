import {Text} from "react-native";
import React from "react";

const _renderRevealedFooter = (handlePress) => {
    return (
        <Text style={{color: '#0096FF', marginTop: 5}} onPress={handlePress}>
            Show less
        </Text>
    );
}

export default _renderRevealedFooter;