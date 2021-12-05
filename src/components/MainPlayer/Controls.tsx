import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { next, pause, play, previous } from '../../utils/trackPlayer'
import NativeButton from '../CommonComps/NativeButton'
import styles from './styles'

const Controls = ({ forwardDisabled = false, onForward }) => {
    const { playingState } = useSelector((state: RootState) => state.tracks)
    return (
        <View style={styles.controlBox}>
            <NativeButton
                onPress={previous}
                buttonStyle={styles.controlButton}
                image={require('../../assets/images/prev.png')}
                imageStyle={styles.normalControlImage}
            />
            <NativeButton
                onPress={(playingState === 3 || playingState === 6) ? pause : play}
                buttonStyle={styles.controlButton}
                image={
                    (playingState === 3 || playingState === 6) ?
                        require('../../assets/images/pause.png')
                        :
                        require('../../assets/images/play.png')
                }
                imageStyle={styles.mainControlImage}
            />
            <NativeButton
                onPress={next}
                buttonStyle={styles.controlButton}
                image={require('../../assets/images/next.png')}
                imageStyle={styles.normalControlImage}
            />
            <NativeButton
                disabled={forwardDisabled}
                onPress={onForward}
                buttonStyle={styles.controlButton}
                image={require('../../assets/images/forward5.png')}
                imageStyle={[styles.normalControlImage, forwardDisabled && styles.disabledImage]}
            />
        </View>
    )
}

export default Controls;
