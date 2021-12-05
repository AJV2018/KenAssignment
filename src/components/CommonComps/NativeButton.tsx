import React from 'react'
import { Animated, ImageSourcePropType, ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { View, Text, TouchableNativeFeedback } from 'react-native'

interface NativeButtonProps {
    onPress: () => void;
    image?: ImageSourcePropType;
    title?: string;
    buttonStyle?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
    textStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
    grayImage?: boolean;


}
function NativeButton({
    onPress = () => { },
    image = null,
    title = '',
    buttonStyle,
    textStyle,
    imageStyle,
    disabled = false,
}: NativeButtonProps) {
    return (
        <TouchableNativeFeedback
            disabled={disabled}
            onPress={() => onPress()}
        >
            <View style={buttonStyle}>
                {
                    image !== null ?
                        <Animated.Image
                            source={image}
                            style={imageStyle}
                        />
                        :
                        null
                }
                {
                    title.length > 0 &&
                    <Text style={textStyle}>{title}</Text>
                }
            </View>
        </TouchableNativeFeedback>
    )
}

export default NativeButton;
