import AnimatedLottieView from 'lottie-react-native'
import React from 'react'
import { View, Text } from 'react-native'
import metrics from '../../theme/metrics'

const PlayingLottie = () => {
    return (
        <AnimatedLottieView
            source={require('../../assets/lotties/playing.json')}
            autoPlay
            loop
            style={{
                width: metrics.responsiveWidth(7),
                height: metrics.responsiveWidth(7),
            }}
        />
    )
}

export default PlayingLottie
