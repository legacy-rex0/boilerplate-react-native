import {Dimensions} from "react-native";

// getOrientation(){
//     if (this.state.screen.width > this.state.screen.height) {
//         return 'LANDSCAPE';
//     }else {
//         return 'PORTRAIT';
//     }
// }
export const WIDTH = Dimensions.get("window").width;
export const HEIGHT = Dimensions.get("window").height;
