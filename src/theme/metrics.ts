import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    responsiveWidth: (percentage: number) => (percentage / 100) * (width < height ? width : height),
    responsiveHeight: (percentage: number) => (percentage / 100) * (width < height ? height : width),
}

export default metrics;