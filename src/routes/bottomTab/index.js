import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {screenOptions} from "../../constants/routes";
import { CustomTab } from "../../components/routes";
import {Dimensions} from "react-native";
import New from "../../screens/main/new";


const Tab = createBottomTabNavigator();
const {Navigator, Screen} = Tab;

const home = require("../../../assets/icons/svg/home.svg");
const home_live = require("../../../assets/icons/svg/home_live.svg");

const { width, height } = Dimensions.get("window");

const BottomTab = (props) => {
    return (
        <Navigator
          screenOptions={screenOptions}
          tabBar={props => <CustomTab {...props} />}
          initialRouteName={"HomeTab"}
          sceneContainerStyle={{backgroundColor: "grey"}}
        >
            <Screen
                name={"HomeTab"}
                component={New}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: home,
                    onlineIcon: home_live,
                }}
            />
        </Navigator>
    );
};

export default BottomTab;
