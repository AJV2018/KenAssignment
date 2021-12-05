import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";
import metrics from "../../theme/metrics";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        padding: metrics.responsiveWidth(5)
    },
    errorText: {
        fontFamily: fonts.type.poppinsMedium,
        fontSize: fonts.size.font12,
        textAlign: 'center',
        paddingHorizontal: metrics.responsiveWidth(5),
        color: colors.lightGrey
    },
    retryText: {
        fontFamily: fonts.type.poppinsMedium,
        fontSize: fonts.size.font14,
        textAlign: 'center',
        paddingHorizontal: metrics.responsiveWidth(5),
        color: colors.lightGrey,
        textDecorationLine: 'underline'
    },
    albumHeaderBox: {

    }
})

export default styles;
