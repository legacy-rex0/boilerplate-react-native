import React, {useEffect} from 'react';
import {Image, Text, View} from "react-native";
import {styles} from "./style";
import {ScreenView} from '../../../global/wrappers';
import {PRIMARY_COLOR, SECONDARY_COLOR} from "../../../constants/theme";
import {} from 'react-native-animatable';



const SplashScreen = (props) => {

    const navigation = props.navigation;

    return (
        <ScreenView style={styles.container} color={PRIMARY_COLOR} dark>

        </ScreenView>
    );
};

export default SplashScreen;
