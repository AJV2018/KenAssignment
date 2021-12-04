import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import globalStyles from "../../theme/globalStyles";
import metrics from "../../theme/metrics";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        backgroundColor: colors.translucentBlack,
        ...globalStyles.justifyAlignCenter
    },
    innerBox: {
        width: metrics.responsiveWidth(60),
        height: metrics.responsiveWidth(60),
        // backgroundColor: colors.white,
        borderRadius: metrics.responsiveWidth(2.5)
    }
})

export default styles;
