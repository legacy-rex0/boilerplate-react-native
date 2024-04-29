import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./style";
import {ScreenView} from "../../../global/wrappers";
import {HEIGHT, PRIMARY_COLOR, WIDTH} from "../../../constants/theme";
import Carousel, {Pagination} from "react-native-snap-carousel";
import {CarouselData} from "../../../constants";
import {Carouseltem} from "../../../components/onboard";
import {CustomButton} from "../../../global/components";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Walkthrough = (props) => {

    //constants
    const navigation = props.navigation;

    const carouselRef = useRef(null);

    // States
    const [index, setIndex] = useState(0);

    // functions
    const constructor = async() => {
        await AsyncStorage.setItem("$onboard_live", "true")
    }

    useEffect(() => {
        constructor();
    }, [])



    return (
        <ScreenView style={styles.container} color={"transparent"} dark>
            <View style={styles.viewContainer}>
            <ScrollView>
                <View style={styles.viewContainer}>

                    <View style={styles.view1}>
                        <View style={styles.carouselContainer}>
                            <Carousel
                                ref={carouselRef}
                                data={CarouselData}
                                // layoutCardOffset={9}
                                renderItem={({item, index}) => (
                                    <Carouseltem
                                        key={index}
                                        item={item}
                                        index={index}
                                    />
                                )}
                                sliderWidth={WIDTH}
                                itemWidth={WIDTH}
                                // itemHeight={HEIGHT * 0.3}
                                inactiveSlideShift={0}
                                onSnapToItem={(index) => setIndex(index)}
                                useScrollView={true}
                                layout={"default"}
                                contentContainerCustomStyle={{position: "absolute", height: HEIGHT * 0.65, zIndex: 2, alignSelf: "center"}}
                                containerCustomStyle={{height: HEIGHT * 0.65, marginBottom: -55}}
                            />

                            <Pagination
                                dotsLength={CarouselData.length}
                                activeDotIndex={index}
                                carouselRef={carouselRef}
                                dotStyle={{
                                    width: 40,
                                    height: 8,
                                    borderRadius: 5,
                                    marginHorizontal: -8,
                                    backgroundColor: PRIMARY_COLOR
                                }}
                                inactiveDotOpacity={0.4}
                                inactiveDotScale={0.6}
                                inactiveDotStyle={{
                                    width: 25,
                                    height: 8,
                                    borderRadius: 5,
                                    marginHorizontal: -8,
                                }}
                                tappableDots={true}
                                containerStyle={{marginBottom: 10}}
                            />
                        </View>

                    </View>

                <View style={{marginTop: 40}}/>

                <View style={styles.view11}>
                    <CustomButton
                        text={"Sign in"}
                        onPress={() => navigation.navigate("signin-screen")}
                    />

                    <TouchableOpacity
                        style={{marginVertical: 10}}
                        activeOpacity={0.6}
                        onPress={() => props.navigation.navigate("acct-details-screen")}
                    >
                        <Text style={styles.text1}>Create Account</Text>
                    </TouchableOpacity>

                    {/*<CustomButton*/}
                    {/*    text={"Create Account"}*/}
                    {/*    light*/}
                    {/*/>*/}
                </View>
            </View>
            </ScrollView>
                </View>
        </ScreenView>
    );
};

export default Walkthrough;
