import React from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable';
import {GREY_LIGHT, GREY_LIGHT2, PRIMARY_COLOR, TEXT_GREY} from "../../constants/theme";


const Header = ({navigation, stage, signup }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.6}
                style={{padding: 5}}
                onPress={() => navigation.goBack()}
            >
                <Ionicons
                    name={"chevron-back"}
                    size={18}
                />
            </TouchableOpacity>

            <View style={styles.rowView}>
                <Animatable.View
                    animation={stage === 1 ? "swing": undefined}
                    delay={100}
                    // duration={2000}
                    style={[styles.dot, stage === 1 ? {width: 28, backgroundColor: PRIMARY_COLOR} : null]}
                />

                <Animatable.View
                    animation={stage === 2 ? "wobble": undefined}
                    delay={100}
                    // duration={2000}
                    style={[styles.dot, stage === 2 ? {width: 28, backgroundColor: PRIMARY_COLOR} : null]}
                />

                <Animatable.View
                    animation={stage === 3 ? "wobble": undefined}
                    delay={100}
                    // duration={2000}
                    style={[styles.dot, stage === 3 ? {width: 28, backgroundColor: PRIMARY_COLOR} : null]}
                />

                {
                    signup &&
                    <Animatable.View
                        animation={stage === 4 ? "wobble": undefined}
                        delay={100}
                        // duration={2000}
                        style={[styles.dot, stage === 4 ? {width: 28, backgroundColor: PRIMARY_COLOR} : null]}
                    />
                }
            </View>

            <View style={{width: 20}}/>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 0.9,
        borderColor: GREY_LIGHT
    },
    rowView: {
        // minWidth: "50%",
        alignItems: "center",
        flexDirection: "row",

    },
    dot: {
        marginHorizontal: 2,
        width: 7,
        height: 7,
        borderRadius: 10,
        backgroundColor: "rgba(73, 69, 69, 0.40)",

    }
})
