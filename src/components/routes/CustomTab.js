import React, {} from "react";
import {BLACK2, dmsans, dmsans_light, GREY, GREY2, PRIMARY_COLOR, WHITE, WIDTH} from "../../constants/theme";
import {Image, KeyboardAvoidingView, Text, TouchableOpacity, View} from "react-native";

const CustomTab = ({ state, descriptors, navigation }) => {
    return (
        <KeyboardAvoidingView style={{ flexDirection: 'row', paddingHorizontal: 20, backgroundColor: WHITE}}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const Icon = options.tabBarIcon;
                const IconOnline = options.onlineIcon;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        activeOpacity={0.77}
                        style={{ flex: 1, alignItems: "center", backgroundColor: WHITE, paddingVertical: 10, justifyContent: "center"}}
                    >
                        {
                            isFocused ?
                                <IconOnline.default width={label == "" ? 37 : 20} height={label == "" ? 37 : 20} />
                                :
                                <Icon.default width={label == "" ? 37 : 20} height={label == "" ? 37 : 20} />
                        }
                        {
                            label != "" &&
                                <Text
                                    style={{
                                        color: isFocused ? PRIMARY_COLOR : BLACK2, fontSize: isFocused ? 11 : 10.5,
                                        fontFamily: isFocused ? dmsans : dmsans_light, marginTop: 5,
                                    }}
                                    numberOfLines={1}
                                    ellipsizeMode={"tail"}
                                >
                                    {label}
                                </Text>
                        }
                    </TouchableOpacity>
                );
            })}
        </KeyboardAvoidingView>
    )
}

export default CustomTab;
