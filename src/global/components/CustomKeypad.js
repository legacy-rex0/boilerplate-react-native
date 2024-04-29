import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from "react-native";
import Key from "./Key";
import {HEIGHT, PRIMARY_COLOR, SECONDARY_COLOR} from "../../constants/theme";

const CustomKeypad = ({lock, pin, setPin, onEnter}) => {


    const addPin = (value) => {
        if(lock) {
            let p = [...pin, value];
            if(p.length === 6){
                setPin(prevState => prevState = [...prevState, value]);
                onEnter(p);
            } else if (p.length < 6){
                setPin(prevState => prevState = [...prevState, value]);
                console.log({value, p})
            }
        } else {
            if(pin.length < 6){
                let p = [...pin, value];
                setPin(prevState => prevState = [...prevState, value]);
                // console.log({value, p})
            }
        }
    }

    const deletePin = () => {
        let newPin = pin;
        newPin.pop();

        setPin(p => p = [...newPin]);
        // console.log({pin})
    }

    return (
        <View style={styles.container}>

            <View style={[styles.view1, {justifyContent: "center", marginBottom: 40}]}>
                <View style={[styles.dot, pin?.length >= 1 ? {backgroundColor: PRIMARY_COLOR} : null]}/>
                <View style={[styles.dot, pin?.length >= 2 ? {backgroundColor: PRIMARY_COLOR} : null]}/>
                <View style={[styles.dot, pin?.length >= 3 ? {backgroundColor: PRIMARY_COLOR} : null]}/>
                <View style={[styles.dot, pin?.length >= 4 ? {backgroundColor: PRIMARY_COLOR} : null]}/>
                <View style={[styles.dot, pin?.length >= 5 ? {backgroundColor: PRIMARY_COLOR} : null]}/>
                <View style={[styles.dot, pin?.length >= 6 ? {backgroundColor: PRIMARY_COLOR} : null]}/>
            </View>

            <View style={styles.view1}>
                <Key text={"1"} onPress={addPin}/>
                <Key text={"2"} onPress={addPin}/>
                <Key text={"3"} onPress={addPin}/>
            </View>

            <View style={styles.view1}>
                <Key text={"4"} onPress={addPin}/>
                <Key text={"5"} onPress={addPin}/>
                <Key text={"6"} onPress={addPin}/>
            </View>

            <View style={styles.view1}>
                <Key text={"7"} onPress={addPin}/>
                <Key text={"8"} onPress={addPin}/>
                <Key text={"9"} onPress={addPin}/>
            </View>

            <View style={styles.view1}>
                <View style={{paddingHorizontal: 30}}/>
                <Key text={"0"} onPress={addPin}/>
                <Key back onPress={deletePin}/>
            </View>
        </View>
    );
};

export default CustomKeypad;

export const styles = StyleSheet.create({
    container: {
        width: "85%",
        // flex: 1,
        // backgroundColor: SECONDARY_COLOR
    },
    view1: {
        width: "100%",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        marginBottom: HEIGHT * 0.035,
    },
    dot: {
        width: 25,
        height: 25,
        borderRadius: 100,
        backgroundColor: "#F5F7F8",
        borderColor: "#E2E6EB",
        elevation: 3,
        marginHorizontal: 8

    }
})
