import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import metrics from '../../theme/metrics';
import NativeButton from './NativeButton';

const BackButton = ({ onPress }) => {
    return (
        <NativeButton
            onPress={onPress}
            buttonStyle={styles.container}
            imageStyle={styles.image}
            image={require('../../assets/images/back.png')}
        />
    )
}

export default BackButton;

const styles = StyleSheet.create({
    container: {
        padding: metrics.responsiveWidth(2.5),
        margin: metrics.responsiveWidth(2.5),
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'flex-start'
    },
    image: {
        width: metrics.responsiveWidth(8),
        height: metrics.responsiveWidth(8),
    }
})
