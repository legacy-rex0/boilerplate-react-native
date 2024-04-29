import React from 'react';
import {View, Text} from "react-native";
import {styles} from "./style";
import {ScreenView} from "../../../global/wrappers";
import { BLACK, MILK } from "../../../constants/theme";

const New = (props) => {
    return (
        <ScreenView style={styles.container} color={MILK} dark>
            <View style={styles.viewContainer}>
              <Text
                style={{color: BLACK, justifyContent: "center", alignItems: "center"}}
              >
                AppContainer
              </Text>
            </View>
        </ScreenView>
    );
};

export default New;
