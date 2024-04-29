import {Platform, StyleSheet} from "react-native";
import {HEIGHT, MILK, WHITE, WIDTH} from "../../../constants/theme";

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
        alignSelf: "center",
        flex: 1
    },
    view1: {
        width: "100%",
        alignSelf: "center",
        alignItems: "center",
        marginTop: 20,
        flex: 1
    },
});
