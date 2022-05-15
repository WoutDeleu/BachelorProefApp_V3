import {Text, View} from "react-native";
import ReadMore from "react-native-read-more-text";
import _renderTruncatedFooter from "./ReadMore/_renderTruncatedFooter";
import _renderRevealedFooter from "./ReadMore/_renderRevealedFooter";
import _handleTextReady from "./ReadMore/_handleTextReady";
import Hart from "./SubjectElements/HartButton";
import Company from "./SubjectElements/Company";
import React from "react";

import styleSubjectList from "../../styles/styleSubjectList";
import Pdf from "./SubjectElements/Pdf";

const Subject = ({subject}) => {
    // console.log(subject.id)
    // console.log(subject.name)
    return(
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
            {/*<Company subject={subject}/>*/}
        </View>
    );
};

export default Subject;