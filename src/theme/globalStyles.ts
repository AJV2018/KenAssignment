import { StyleSheet } from "react-native";
import colors from "./colors";
import fonts from "./fonts";

const globalStyles = StyleSheet.create({
    //FLEXBOX
    fullScreen: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },
    flexRow: {
        flexDirection: 'row'
    },
    justifyAlignCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },


    //TEXT STYLES
    bold_h1: {
        fontFamily: fonts.type.poppinsSemiBold,
        fontSize: fonts.size.font16
    },
    bold_h2: {
        fontFamily: fonts.type.poppinsSemiBold,
        fontSize: fonts.size.font14
    },
    bold_h3: {
        fontFamily: fonts.type.poppinsSemiBold,
        fontSize: fonts.size.font12
    },

    medium_h1: {
        fontFamily: fonts.type.poppinsMedium,
        fontSize: fonts.size.font16
    },
    medium_h2: {
        fontFamily: fonts.type.poppinsMedium,
        fontSize: fonts.size.font14
    },
    medium_h3: {
        fontFamily: fonts.type.poppinsMedium,
        fontSize: fonts.size.font12
    },
    regular_h1: {
        fontFamily: fonts.type.poppinsRegular,
        fontSize: fonts.size.font16
    },
    regular_h2: {
        fontFamily: fonts.type.poppinsRegular,
        fontSize: fonts.size.font14
    },
    regular_h3: {
        fontFamily: fonts.type.poppinsRegular,
        fontSize: fonts.size.font12
    },
})

export default globalStyles;
