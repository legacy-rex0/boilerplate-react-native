import {BarChart} from "react-native-chart-kit";
import {PRIMARY_COLOR, SECONDARY_COLOR, WIDTH} from "../../constants/theme";
import {useContext} from "react";
import {GlobalContext, UserContext} from "../../contexts";
import {View} from "react-native";
import {Chase} from "react-native-animated-spinkit";
import {formatCurrency} from "../../utils";


const Barchart = ({labels, dataset, loading, screen}) => {

    //configuration for chart
    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 5,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 0) => (screen === "expense" ? "red" : SECONDARY_COLOR),
        // strokeWidth: 0.4, // optional, default 3
        barPercentage: 1,
        propsForLabels: {marginLeft: 20, color: "#000"},
        useShadowColorFromDataset: false, // optional
        style: {width: WIDTH * 1.2, fontSize: 15, color: "#000"},
    };

    const data = {
        labels: labels ?? ["Dec", "Jan", "Feb", "Mar", "Apr"],
        datasets: [
            {
                data: dataset.length === 0 ? [0, 0, 0, 0, 0] : dataset ?? [0, 0, 0, 0, 0],
                color: (opacity = 1) => (screen === "expense" ? `rgba(255, 0, 0, ${opacity})` : `rgba(0, 149, 229, ${opacity})`), // optional
                strokeWidth: 0.1 // optional
            }
        ],
        legend: ["Rainy Days"], // optional
    };


    return (
        <View>
            {
                loading ?
                    <View style={{width: "100%", alignItems: "center", justifyContent: "center"}}>
                        <Chase color={screen === "expense" ? "red" : PRIMARY_COLOR} size={WIDTH * 0.2} />
                    </View>
                    :
                    <BarChart
                        style={{alignSelf: "center", backgroundColor: "white", paddingBottom: 20, alignItems: "center"}}
                        data={data}
                        width={WIDTH * 0.8}
                        height={220}
                        yAxisLabel={"₦"}
                        chartConfig={{...chartConfig}}
                        verticalLabelRotation={25}
                        yLabelsOffset={-10}
                    />
            }
        </View>
    )
}

export {Barchart};
