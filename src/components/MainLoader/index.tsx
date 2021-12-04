import React, { ReactElement } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import LottieView from 'lottie-react-native';
interface MainLoaderProps {
    loading: boolean;
}
const MainLoader = (props: MainLoaderProps): ReactElement => {
    if (!props.loading) {
        return null
    }
    return (
        <View style={styles.container}>
            <View style={styles.innerBox}>
                <LottieView
                    source={require('../../assets/lotties/musicLoader.json')}
                    autoPlay
                    loop
                />
            </View>
        </View>
    )
}

export default MainLoader
