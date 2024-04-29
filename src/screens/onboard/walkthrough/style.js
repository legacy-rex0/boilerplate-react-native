import {Platform, StyleSheet} from "react-native";
import {dmsans_bold, HEIGHT, MILK, PRIMARY_COLOR, WHITE, WIDTH} from "../../../constants/theme";

export const styles= StyleSheet.create({
    container: {
        flex: 1,
        height: HEIGHT,
        backgroundColor: MILK,
        width: WIDTH,
        // paddingTop: Platform.OS === "android" ? 40 : 20,
        alignSelf: "center",
        alignItems: "center"
    },
    viewContainer: {
        width: "100%",
        // alignSelf: "center",
        flex: 1,
        // backgroundColor: "grey"
    },
    view1: {
        width: "90%",
        alignSelf: "center",
        alignItems: "center",
        flex: 1
    },
    carouselContainer: {
        width: "100%",
        alignSelf: "center",
    },
    view11: {
        width: "90%",
        alignSelf: "center",
        flex: 1,
        marginBottom: 100,
    },
    text1: {
        fontFamily: dmsans_bold,
        fontSize: 13,
        color: PRIMARY_COLOR,
        alignSelf: "center",
        textAlign: "center"
    }
});
