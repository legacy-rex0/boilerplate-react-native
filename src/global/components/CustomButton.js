import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {dmsans_bold, PRIMARY_COLOR, SECONDARY_COLOR, WHITE} from "../../constants/theme";
import {Flow} from "react-native-animated-spinkit";


const CustomButton = ({containerStyle, text, textStyle, light, onPress, disabled, loading}) => {
    return (
        <TouchableOpacity
            style={[styles.container, loading? {padding: 15} : disabled ? {opacity: 0.8} : light ? {backgroundColor: WHITE, borderWidth: 1, borderColor: PRIMARY_COLOR} : null, containerStyle ]}
            activeOpacity={0.65}
            onPress={() => onPress()}
            disabled={disabled || loading}
        >
            {
                loading ?
                    <Flow color={WHITE} size={20} style={{padding: 15}}/>
                    :
                    <Text
                        style={[styles.text, light ? {color: SECONDARY_COLOR} : null, textStyle]}
                    >
                        {text ?? "Next"}
                    </Text>
            }
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 10,
        backgroundColor: SECONDARY_COLOR,
        alignSelf: "center",
        justifyContent: "center",
        // padding: 15,
        marginBottom: 12,
        alignItems: "center",
    },
    text: {
        color: WHITE,
        fontSize: 12.5,
        fontFamily: dmsans_bold,
        textAlign: "center",
        padding: 18
    }
})
