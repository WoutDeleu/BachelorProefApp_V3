import {Text, View} from "react-native";
import ReadMore from "react-native-read-more-text";
import _renderTruncatedFooter from "./_renderTruncatedFooter";
import _renderRevealedFooter from "./_renderRevealedFooter";
import _handleTextReady from "./_handleTextReady";
import React from "react";

import styleSubjectList from "../../styles/styleSubjectList";


const Subject = ({subject}) => {
    {console.log(subject.name)}
    return(
        <View style={styleSubjectList.subjectTotalBlock}>
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
        </View>
    );
};

export default Subject;