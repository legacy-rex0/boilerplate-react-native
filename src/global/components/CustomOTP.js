import React, {useRef, useState, useEffect} from "react";
import {View, TextInput, StyleSheet, Text} from "react-native";
import {BLACK, dmsans, dmsans_semibold, GREY, PRIMARY_COLOR, WIDTH} from "../../constants/theme";

const CustomOTP = ({setOtp, otp, viewStyle, inputStyle}) => {

    // useEffect(() => {
    //     // setOtp([one, two, three, four]);
    //     // console.log({one, two, three, four, otp});
    //
    //     return () => {
    //         setOtp([]);
    //         setOne("");
    //         setTwo("");
    //         setThree("");
    //         setFour("");
    //     };
    // }, [one, two, three, four]);


    //States
    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [three, setThree] = useState("");
    const [four, setFour] = useState("");

    const [codes, setCodes] = useState(59);

    //Refs
    const firstRef = useRef();
    const secondRef = useRef();
    const thirdRef = useRef();
    const fourthRef = useRef();

    const _setOne = (val) => {
        _onChange(val, 0);
    }

    const _setTwo = (val) => {
        _onChange(val, 1);
    }

    const _setThree = (val) => {
        _onChange(val, 2);
    }

    const _setFour = (val) => {
        _onChange(val, 3);
    }
    //Functions
    const _onBlur = () => {

    }

    const _onFocus = () => {

    };

    const _onChange = (val, index) => {
        // console.log({val, index}, "other: ", Number.parseInt(index));
        // console.log({one, two, three, four})
        let arr = [...otp];
        if (val){
            arr[!index ? 0 : index] = val;
            setOtp(arr);
        }

        if(val !== undefined || val !== null || val.length !== 0 || !val) {
            if(index === 0){
                setOne(val);
                secondRef.current.focus();
            } else if (index === 1) {
                setTwo(val);
                thirdRef.current.focus();
            } else if (index === 2) {
                setThree(val);
                fourthRef.current.focus();
            } else if (index === 3) {
                setFour(val);
                fourthRef.current.blur();
            }
        } else {
            _onDelete(index)
        }

        console.log({val, index});

    };

    const _onDelete = (index) => {
        try{
            let arr = [...otp];
            if (index){
                arr[index].pop;
                setOtp([]);
                setOne("");
                setTwo("");
                setThree("");
                setFour("");
            }

            console.log({index});

            if(index === 0){
                //Add a toast
            } else if (index === 1) {
                firstRef.current.focus();
            } else if (index === 2) {
                secondRef.current.focus();
            } else if (index === 3) {
                thirdRef.current.focus();
            }

        } catch(error){
            _errorPrompt(error.message);
        }

    };


    return(
        <View style={styles.vContainer}>
            <View style={styles.container}>
                <View
                    style={[styles.viewContainer, viewStyle]}
                >
                    <TextInput
                        ref={firstRef}
                        style={[styles.input, inputStyle]}
                        maxLength={1}
                        onBlur={_onBlur}
                        onFocus={_onFocus}
                        value={one}
                        keyboardType={"number-pad"}
                        onChangeText={(e) => _setOne(e)}
                        onKeyPress={( {nativeEvent}) => {
                            nativeEvent.key === 'Backspace' &&
                                // _onDelete(0)
                                null
                                // _onChange(nativeEvent.text, 0)
                        }}
                    />
                </View>

                <View
                    style={[styles.viewContainer, viewStyle]}
                >
                    <TextInput
                        ref={secondRef}
                        style={[styles.input, inputStyle]}
                        maxLength={1}
                        onBlur={_onBlur}
                        onFocus={_onFocus}
                        value={two}
                        keyboardType={"number-pad"}
                        onChangeText={(e) => _setTwo(e)}
                        onKeyPress={({ nativeEvent }) => {
                            nativeEvent.key === 'Backspace' &&
                                // _onDelete(1)
                                // :
                                null
                                // _setTwo(nativeEvent.text);
                                // _onChange(nativeEvent.text, 1)
                        }}
                    />
                </View>

                <View
                    style={[styles.viewContainer, viewStyle]}
                >
                    <TextInput
                        ref={thirdRef}
                        style={[styles.input, inputStyle]}
                        maxLength={1}
                        onBlur={_onBlur}
                        onFocus={_onFocus}
                        value={three}
                        keyboardType={"number-pad"}
                        onChangeText={(e) => _setThree(e)}
                        onKeyPress={({ nativeEvent }) => {
                            nativeEvent.key === 'Backspace' &&
                                // _onDelete(2)
                                // :
                                // _onChange(nativeEvent.text, 2)
                                null
                        }}
                    />
                </View>

                <View
                    style={[styles.viewContainer, viewStyle]}
                >
                    <TextInput
                        ref={fourthRef}
                        style={[styles.input, inputStyle]}
                        maxLength={1}
                        onBlur={_onBlur}
                        onFocus={_onFocus}
                        value={four}
                        keyboardType={"number-pad"}
                        onChangeText={(e) => _setFour(e)}
                        onKeyPress={({ nativeEvent }) => {
                            nativeEvent.key === 'Backspace' &&
                                // _onDelete(3)
                                // :
                                // _onChange(nativeEvent.text, 3)
                                // _setFour(nativeEvent.text);
                                null
                        }}
                    />
                </View>

            </View>
            <Text style={styles.text1}>Resend codes in <Text style={styles.text2}>0:{`${codes}`}s</Text> </Text>
        </View>
    )
}

export default CustomOTP;

const styles = StyleSheet.create({
    container: {width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly"},
    viewContainer: {
        width: WIDTH * 0.2, height: WIDTH * 0.2,
        alignItems: "center", justifyContent: "center",
        borderRadius: 10, borderWidth: 0.7, borderColor: "#E1E1E1",
    },
    input: {
        fontFamily: dmsans, color: "#000",
        padding: 10, fontSize: 22,
    },
    vContainer: {
        width: "100%",
    },
    text1: {
        color: BLACK,
        fontFamily: dmsans,
        fontSize: 12.5,
        padding: 20,
        textAlign: "center",
    },
    text2: {
        color: PRIMARY_COLOR,
        fontFamily: dmsans_semibold,
        fontSize: 12
    }
})
