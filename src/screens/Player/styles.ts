import { StyleSheet } from "react-native";
import metrics from "../../theme/metrics";

const styles = StyleSheet.create({
    imageBox: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        paddingVertical: metrics.responsiveWidth(2.5),
        width: metrics.responsiveWidth(70),
        height: metrics.responsiveWidth(70),
    }
})
export default styles;