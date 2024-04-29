import React, {useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, TextInput as Input} from "react-native";
import {BLACK, dmsans, GREY, GREY2, LIGHT_BLUE, PRIMARY_COLOR, WHITE, WIDTH} from "../../constants/theme";
import {TextInput} from "react-native-paper";
import {Ionicons} from "@expo/vector-icons";

const CustomInput = ({
                         label, placeholder, value, setValue, setCode, code, bottomSheetRef, showLabel,
                         rightIcon, containerStyle, inputStyle, sourceRIcon, phone, rightIconStyle,
                         setValid, valid, rules, setRules, disabled, setFocus, onFocus, ...props  }) => {

    const [visible, setVisible] = useState(false);
    const [showL, setShowL] = useState(false);

    //functions
    const _onFocus = () => {
        setShowL(true);
        if(onFocus)
            onFocus(true);
    }

    const _onBlur = () => {
        setShowL(false);
        if(onFocus)
            onFocus(false);
    }

    const handleValidate = (val) => {
        setValue(val);

        const regx2 = /^[\+]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{3,8}$/im;
        const lowerLetter = /.*[a-z].*/
        const upperLetter = /.*[A-Z].*/
        const numberL = /.*[0-9].*/
        const spCharacter = /.*[^a-zA-Z0-9].*/


        if (lowerLetter.test(val)) {
            rules.map((rule) => {
                if(rule.id === 1){
                    rule.valid = true;
                }
            })
            setRules(rules);
        } else {
            rules.map((rule) => {
                if(rule.id === 1){
                    rule.valid = false;
                }
            });
            setRules(rules);
        }

        if (upperLetter.test(val)) {
            rules.map((rule) => {
                if(rule.id === 2){
                    rule.valid = true;
                }
            })
            setRules(rules);
        } else {
            rules.map((rule) => {
                if(rule.id === 2){
                    rule.valid = false;
                }
            });
            setRules(rules);
        }


        if (numberL.test(val)) {
            rules.map((rule) => {
                if(rule.id === 3){
                    rule.valid = true;
                }
            })
            setRules(rules);
        } else {
            rules.map((rule) => {
                if(rule.id === 3){
                    rule.valid = false;
                }
            });
            setRules(rules);
        }

        if (spCharacter.test(val)) {
            rules.map((rule) => {
                if(rule.id === 4){
                    rule.valid = true;
                }
            })
            setRules(rules);
        } else {
            rules.map((rule) => {
                if(rule.id === 4){
                    rule.valid = false;
                }
            });
            setRules(rules);
        }

        if (val.length >= 8) {
            rules.map((rule) => {
                if(rule.id === 5){
                    rule.valid = true;
                }
            })
            setRules(rules);
        } else {
            rules.map((rule) => {
                if(rule.id === 5){
                    rule.valid = false;
                }
            });
            setRules(rules);
        }
    };




    return (
        <View style={[styles.container, containerStyle]}>
            {
                phone ?
                    <>
                        <View style={[styles.container1, disabled ? {backgroundColor: LIGHT_BLUE} : null]}>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() => bottomSheetRef.current.present()}
                                style={{marginHorizontal: 10}}
                                disabled={disabled}
                            >
                                <Text style={styles.text}>{code}</Text>
                            </TouchableOpacity>
                            <View style={{marginRight: 10, height: 25, width: 1, backgroundColor: BLACK}} />

                            <Input
                                placeholder={placeholder}
                                value={value}
                                onChangeText={setValue}
                                style={[
                                    {width: "80%", backgroundColor: WHITE, fontSize: 12, fontFamily: dmsans, color: BLACK, borderWidth: 0, padding: 12 },
                                    disabled ? {backgroundColor: LIGHT_BLUE} : null
                                ]}
                                keyboardType={"phone-pad"}
                                editable={!disabled}
                                {...props}
                            />
                        </View>
                    </>

                    :
                    <>
                        <TextInput
                            mode='outlined'
                            style={[styles.inputStyle, inputStyle, disabled ? {backgroundColor: LIGHT_BLUE} : null]}
                            label={showL && label}
                            onFocus={() => _onFocus()}
                            keyboardType={label === "Email" ? "email-address" : "default"}
                            onBlur={() => _onBlur()}
                            placeholder={placeholder}
                            underlineColor={GREY2}
                            activeUnderlineColor={PRIMARY_COLOR}
                            placeholderTextColor={"#aaa"}
                            textColor={BLACK}
                            activeOutlineColor={PRIMARY_COLOR}
                            outlineColor={GREY2}
                            outlineStyle={{borderWidth: 1}}
                            value={value}
                            onChangeText={label == "Password" && rules ? handleValidate : setValue}
                            contentStyle={{fontFamily: dmsans}}
                            secureTextEntry={ label == "Password" && !visible }
                            editable={!disabled}
                            autoCapitalize={label === "Email" ? "none" : "sentences"}
                            {...props}
                        />

                        {
                            rightIcon &&

                            (
                                rightIcon === "dropDown" ?

                                <TouchableOpacity
                                    style={[styles.rightIcon, rightIconStyle]}
                                    activeOpacity={0.6}
                                >
                                    <Ionicons name={"chevron-down"} size={20} color={GREY2} />
                                </TouchableOpacity>
                                    :
                                <TouchableOpacity
                                    style={styles.rightIcon}
                                    activeOpacity={0.6}
                                    onPress={() => {
                                        console.log({visible})
                                        setVisible(!visible)
                                    }}
                                >
                                    {
                                        visible ?
                                            <Ionicons name={"eye"} size={20} color={GREY2} />
                                            :
                                            <Ionicons name={"eye-off"} size={20} color={GREY2}  />
                                    }
                                </TouchableOpacity>
                            )
                        }
                    </>
            }

        </View>
    );
};

export default CustomInput;


const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    inputStyle: {
        width: WIDTH * 0.9,
        // padding: 5,
        backgroundColor: WHITE,
        color: BLACK,
        borderRadius: 6,
        fontSize: 12,
        fontFamily: dmsans,
        // borderColor: SECONDARY_COLOR,
        // marginBottom: 20
    },
    container1: {
        width: WIDTH * 0.9,
        alignSelf: "center",
        borderRadius: 6,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.8,
        borderColor: GREY2,
        // padding: 15,
        paddingHorizontal: 10,
        backgroundColor: WHITE,
    },
    rightIcon: {
        position: "absolute",
        right: 40,
        padding: 12,
        alignSelf: "center"
    },
    text: {
        fontSize: 12,
        fontFamily: dmsans,
        color: BLACK,
    }
})
