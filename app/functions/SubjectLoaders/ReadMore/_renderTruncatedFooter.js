import {Text} from "react-native";
import React from "react";

const _renderTruncatedFooter = (handlePress) => {
    return (
        <Text style={{color: '#0096FF', marginTop: 5}} onPress={handlePress}>
            Read more
        </Text>
    );
}
export default _renderTruncatedFooter;