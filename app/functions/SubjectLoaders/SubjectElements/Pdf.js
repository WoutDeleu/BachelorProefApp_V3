import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable } from "react-native";
import styleSubjectList from "../../../styles/styleSubjectList";

const Pdf = ({subject}) => {
    if(subject.haspdf) {
        return (
            <Pressable style={styleSubjectList.pdf}>
                <AntDesign
                    name="pdffile1"
                    size={20}
                    color="white"
                />
            </Pressable>
        );
    }
    else return null;
};

export default Pdf;