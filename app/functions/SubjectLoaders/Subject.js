import {Text, View} from "react-native";
import ReadMore from "react-native-read-more-text";
import _renderTruncatedFooter from "./_renderTruncatedFooter";
import _renderRevealedFooter from "./_renderRevealedFooter";
import React from "react";

const Subject = ({subject}) => {
    {console.log(subject.name)}
    return(
        <View style={styles.subjectTotalBlock}>
            <Text style={styles.students}>
                Students: {subject.nrOfStudents}
            </Text>
            <Text style ={styles.title}>
                {subject.name}
            </Text>
            <ReadMore
                numberOfLines={3}
                renderTruncatedFooter={_renderTruncatedFooter}
                renderRevealedFooter={_renderRevealedFooter}
                onReady={_handleTextReady}>
                <Text style={styles.shortDescription}>
                    {subject.description}
                </Text>
            </ReadMore>
        </View>
    );
};

export default Subject;