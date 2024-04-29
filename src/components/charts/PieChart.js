import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {G, Line, Rect, Svg, Text as SvgText} from 'react-native-svg';
import {PieChart} from 'react-native-svg-charts';
import {HEIGHT, PRIMARY_COLOR, WIDTH} from "../../constants/theme";
import {_getExpensePchartOv} from "../../hooks/expense.hooks";
import {_getIncomePchartOv} from "../../hooks/income.hooks";
import {Chase} from "react-native-animated-spinkit";

// Custom component to render labels with lines
const Labels = ({slices, height, width}) => {
    const radius = Math.min(width, height) / 2;
    return slices.map((slice, index) => {
        const {labelCentroid, pieCentroid, data} = slice;
        const [centroidX, centroidY] = labelCentroid;
        const [pieX, pieY] = pieCentroid;

        // Calculate the angle to place labels correctly
        const angle = Math.atan2(pieY, pieX);
        const lineDistance = radius * 0.989; // Reduced line length to be closer to the chart

        // Calculate the position for the line and label
        const lineX = Math.cos(angle) * lineDistance;
        const lineY = Math.sin(angle) * lineDistance;
        const labelX = lineX + (centroidX > 0 ? 1 : -1); // Adjusted offset for label
        const labelY = lineY;

        // Add padding around the text
        const padding = 6;
        // Estimate the size of the text based on its length and font size
        const fontSize = 8;
        const textWidth = (data?.label?.length ?? 0) * fontSize * 0.5; // Approximate width of each character
        const textHeight = fontSize; // Approximate height of the text
        const nowHeight = WIDTH * 0.55

        return (
            <G key={index}>

                {/*<Svg height={`${nowHeight}`} width="100%">*/}

                {/* Background rectangle for the text */}
                <Rect
                    x={labelX - (centroidX > 0 ? 0 : textWidth) - padding}
                    y={labelY - textHeight / 2 - padding}
                    width={textWidth + padding * 5}
                    height={textHeight + padding * 4}
                    fill="#F5F5F5"
                    strokeWidth={1}
                    rx={5} //border radius of the label
                    ry={5} //border radius of the label
                />

                {/* Line from the edge of the pie chart to the label */}
                <Line
                    x1={centroidX}
                    y1={centroidY}
                    x2={lineX}
                    y2={lineY}
                    stroke={data?.svg?.fill}
                    strokeWidth={1.8}
                    strokeDasharray="2, 2"
                />

                {/* Label text positioned outside the pie chart */}

                {/* First Text Component (data.percent) */}
                <SvgText
                    x={labelX}
                    y={labelY}
                    fill={data?.svg?.fill}
                    fontSize={14}
                    fontWeight={"700"}
                    textAnchor={centroidX > 0 ? 'start' : 'end'}
                    strokeWidth={0.2}
                >
                    {data?.percent}
                </SvgText>

                {/* Second Text Component (data.label) */}
                <SvgText
                    x={labelX}
                    y={labelY + 15} // Adjust vertical position as needed
                    fill={"#000"}
                    fontSize={11}
                    textAnchor={centroidX > 0 ? 'start' : 'end'}
                    strokeWidth={0.2}
                >
                    {data?.label}
                </SvgText>

                {/*</Svg>*/}
            </G>
        );
    });
};


const NPieChart = ({type, navigation}) => {

    // const [user] = useContext(UserContext);

    const cData = [
        {key: 1, value: 0, svg: {fill: '#600080'}, label: '', percentage: '0%'},
        {key: 2, value: 0, svg: {fill: '#7f0080'}, label: '', percentage: '0%'},
        {key: 3, value: 0, svg: {fill: '#300080'}, label: '', percentage: '0%'},
        {key: 4, value: 0, svg: {fill: '#00cc80'}, label: '', percentage: '0%'},
    ];


    //states
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


    //functions
    const _constructor = async() => {
        setLoading(true);
        if(type === "expense"){
            const res = await _getExpensePchartOv();
            console.log({expenseChart: res})
            if(res !== false){
                setData(res);
            }
        } else {
            const res = await _getIncomePchartOv();
            console.log({incomeChart: res})
            if(res !== false){
                setData(res);
            }
        };
        setLoading(false);
    };


    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            _constructor();
        });
        return unsubscribe;
    }, [navigation]);


    return (
        <View style={styles.container}>

            {
                loading || data.length === 0 ?
                    <View style={{width: "100%", alignItems: "center", justifyContent: "center"}}>
                        {/*<Chase color={type === "expense" ? "red" : PRIMARY_COLOR} size={WIDTH * 0.2} />*/}
                        <Text style={{fontSize: 12, color: "#aaa" }}>No Category found</Text>
                    </View>

                    :

                     // Pie chart
                    <PieChart
                        style={styles.pieChart}
                        // style={{ height: HEIGHT * 0.5, width: WIDTH * 0.4 }}
                        data={data ?? cData}
                        innerRadius="60%" // Inner radius of the donut chart
                        outerRadius="78%" // Outer radius of the donut chart
                        valueAccessor={({item}) => Number(item?.value)}
                        padAngle={0.09} // Space between segments

                        // animate={true}
                        // animationDuration={100}
                        // labelRadius={0.2}
                    >
                        <Labels />
                    </PieChart>
            }

        </View>
    );
};


export default NPieChart;

// Stylesheet for the component
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        // height: '100%',
        // width: '100%',
        width: WIDTH * 0.62,
        height: WIDTH * 0.62,
        marginVertical: 30,
        alignSelf: "center",
        // backgroundColor: "grey",
    },
    pieChart: {
        height: WIDTH * 0.55,
        width: WIDTH * 0.75,
        // paddingTop: 40
        // justifyContent: "center",
        // alignItems: "center",
        // borderWidth: 0.5,
        // borderRadius: 20
    },
    centralTextContainer: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 7,
        // backgroundColor: "grey",
        transform: [{translateX: -50}, {translateY: -30}],
    },
    figure: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
    },
    centralText: {
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'center',

    },
});
