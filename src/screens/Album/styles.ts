import { StyleSheet } from "react-native";
import metrics from "../../theme/metrics";

const styles = StyleSheet.create({
    trackHeaderBox: {
        padding: metrics.responsiveWidth(2.5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: metrics.responsiveWidth(70),
        height: metrics.responsiveWidth(70),
        borderRadius: 2.5
    },
    albumNameText: {
        paddingTop: metrics.responsiveWidth(5),
    },

})

export default styles;