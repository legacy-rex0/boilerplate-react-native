import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {BLACK2, dmsans_medium, dmsans_semibold, GREY_LIGHT2, PRIMARY_COLOR} from "../../constants/theme";
import {Ionicons} from "@expo/vector-icons";

const Header = ({navigation, noBack, text, onPressLeft, leftIcon, type}) => {
    return (
        <View style={styles.container}>
            {
                noBack ?
                    <View style={{}} />
                    :
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => navigation.goBack()}
                        style={[{paddingHorizontal: 12}]}
                    >
                        <Ionicons name={"chevron-back"} size={18} color={BLACK2} />
                    </TouchableOpacity>
            }

            <Text style={[styles.title, !noBack ? {marginLeft: -18} : null]}>{text}</Text>

            {/*{*/}
            {/*    (!noBack && !leftIcon) &&*/}
            {/*        <View style={{}} />*/}
            {/*}*/}

            {
                !leftIcon ?
                    <View style={{}} />
                    :
                    leftIcon && type === "expense_history"?
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => onPressLeft()}
                    >
                        <Image
                            source={require("../../../assets/icons/document-download.png")}
                            style={{width: 18, height: 18, padding: 5, marginRight: 10}}
                        />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => onPressLeft()}
                    >
                        {type === "text" ?
                            <Text style={styles.textIcon}>{leftIcon}</Text>
                            :
                            <Ionicons name={leftIcon} size={18} color={PRIMARY_COLOR} />
                        }
                    </TouchableOpacity>
            }
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderBottomWidth: 0.8,
        borderColor: GREY_LIGHT2,
        flexDirection: "row",
        alignSelf: "center",
    },
    title: {
        fontSize: 13.5,
        fontFamily: dmsans_semibold,
    },
    textIcon: {
        fontSize: 12,
        color: PRIMARY_COLOR,
        fontFamily: dmsans_medium
    }
})
