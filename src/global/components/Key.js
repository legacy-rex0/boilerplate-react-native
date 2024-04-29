import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import {BLACK, dmsans_bold, dmsans_semibold, PRIMARY_COLOR, TEXT_GREY, WIDTH} from "../../constants/theme";
import {Ionicons} from "@expo/vector-icons";

const Key = ({text, onPress, back}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.6}
            onPress={() => onPress(text)}
        >
            {
                back ?
                    <Ionicons name={"backspace"} size={20}/>
                    :
                    <Text style={styles.text}>{text}</Text>
            }
        </TouchableOpacity>
    );
};

export default Key;

export const styles = StyleSheet.create({
    container: {
        width: 62,
        height: 62,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5F7F8",
        borderColor: "#E2E6EB",
        padding: 18,
        // paddingHorizontal: 25,
        borderRadius: 10,
        elevation: 3,
    },
    text: {
        fontSize: 20,
        fontFamily: dmsans_semibold,
        color: PRIMARY_COLOR
    },
    icon: {
        width: 16,
        height: 16,
        alignSelf: "center",
    }
})
