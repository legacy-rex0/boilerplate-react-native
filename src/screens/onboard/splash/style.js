import {Platform, StyleSheet} from "react-native";
import {dmsans, dmsans_light, HEIGHT, PRIMARY_COLOR, WIDTH} from "../../../constants/theme";

export const styles= StyleSheet.create({
    container: {
        flex: 1,
        height: HEIGHT,
        backgroundColor: PRIMARY_COLOR,
        width: WIDTH,
        paddingTop: Platform.OS === "android" ? 40 : 20,
        alignSelf: "center",
        alignItems: "center"
    },
    viewContainer: {
        width: "100%",
        alignSelf: "center",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    view1: {
        width: "100%",
        alignSelf: "center",
        alignItems: "center",
        marginTop: 20,
        flex: 1
    },
    logo: {
        width: WIDTH * 0.38,
        height: WIDTH * 0.48,
        marginTop: WIDTH * -0.2
    },
    footer: {
        position: "absolute",
        width: "100%",
        alignSelf: "center",
        alignItems: "center",
        bottom: 20,
    },
    text1: {
        fontSize: 10.5,
        fontFamily: dmsans_light,
    }
});
