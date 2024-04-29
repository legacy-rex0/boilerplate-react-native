import React, {useEffect, useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {navigatorOptions, screenOptions} from "../../constants/routes";
import BottomTab from "../bottomTab";
import New from "../../screens/main/new";

const RootNav = (props) => {
    const Stack = createStackNavigator();
    const { Navigator, Screen } = Stack;
    return (
        <NavigationContainer>
            <Navigator screenOptions={navigatorOptions} initialRouteName={"splash-screen"}>

              <Screen name="new-screen" component={New} options={screenOptions} />

            </Navigator>
        </NavigationContainer>
    );
};

export default RootNav;
