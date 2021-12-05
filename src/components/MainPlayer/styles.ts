import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import metrics from "../../theme/metrics";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: metrics.responsiveWidth(5),
        justifyContent: 'space-between'
    },
    innerRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: metrics.responsiveWidth(2.5),
    },
    imageBox: {
        width: metrics.responsiveHeight(6),
        height: metrics.responsiveHeight(6),
        borderRadius: 5,
        elevation: 5
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    speaker: {
        width: metrics.responsiveWidth(5),
        height: metrics.responsiveWidth(5),
        tintColor: colors.white
    },
    trackName: {
        flex: 1,
        marginLeft: metrics.responsiveWidth(2.5),
    },
    controlBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: metrics.responsiveWidth(30),
        // marginRight: metrics.responsiveWidth(2.5),
        // backgroundColor: 'red'
    },
    controlButton: {
        padding: metrics.responsiveWidth(1.25),
        margin: metrics.responsiveWidth(1.25),
        justifyContent: "center",
        alignItems: 'center',
    },
    normalControlImage: {
        width: metrics.responsiveWidth(8),
        height: metrics.responsiveWidth(8),
        tintColor: colors.white,
    },
    mainControlImage: {
        width: metrics.responsiveWidth(12),
        height: metrics.responsiveWidth(12),
        tintColor: colors.white,
    },
    progressBar: {
        marginTop: metrics.responsiveWidth(5),
        marginBottom: metrics.responsiveWidth(2.5),
    },
    disabledImage: {
        tintColor: 'grey',
    }
})

export default styles;
