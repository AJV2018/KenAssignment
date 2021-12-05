import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import TrackPlayer, { useProgress } from 'react-native-track-player'
import * as Progress from 'react-native-progress';
import metrics from '../../theme/metrics';
import colors from '../../theme/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Track } from '../../types/Track';
import globalStyles from '../../theme/globalStyles';
import Controls from './Controls';
import styles from './styles';
import { goBack } from '../../navigation/RootNavigation';
import { useNavigationState } from '@react-navigation/core';
import { seekTo } from '../../utils/trackPlayer';
import Slider from 'react-native-slider';
const MiniPlayer = () => {
    const progress = useProgress(200)
    const { tracks, currentTrack } = useSelector((state: RootState) => state.tracks);
    const [trackSliding, setTrackSliding] = useState(false);
    const cTrack = tracks.find((itm: Track) => itm?.id === currentTrack) || {}
    const [volume, setVolume] = useState(0.1)
    useEffect(() => {
        (async () => {
            const vol = await TrackPlayer.getVolume()
            console.log('VOLUME', vol)
            setVolume(vol)
        })()
    }, [])

    useEffect(() => {
        (async () => {
            console.log('vol', volume)
            await TrackPlayer.setVolume(volume)
        })()
    }, [volume])
    useEffect(() => {
        if (!currentTrack) {
            goBack()
        }
    }, [currentTrack])

    return (
        <View
            style={styles.container}
        >
            <>
                <Text style={[globalStyles.medium_h1, globalStyles.white]}>{cTrack.name}</Text>
                <Text style={[globalStyles.regular_h2, globalStyles.white]}>{cTrack.artistName}</Text>
            </>
            <Slider
                value={(progress.position / progress.duration) || 0.1}
                onValueChange={value => seekTo(value * progress.duration)}
                thumbTintColor={colors.white}
                minimumTrackTintColor={colors.red}
                onSlidingStart={() => setTrackSliding(true)}
                onSlidingComplete={() => setTrackSliding(false)}
                thumbStyle={trackSliding ? bigThumb : normalThumb}
                trackStyle={{
                    height: 2
                }}

            />
            {/* <Progress.Bar
                useNativeDriver={true}
                progress={(progress.position / progress.duration) || 0.1}
                width={metrics.responsiveWidth(90)}
                borderRadius={0}
                borderWidth={0}
                color={colors.red}
                height={2}
                style={styles.progressBar}
            /> */}
            <View style={[globalStyles.flexRow, globalStyles.justifySbAlignCenter]}>
                <Text style={[globalStyles.medium_h3, globalStyles.white]}>00:{('0' + Math.round(progress.position)).slice(-2)}</Text>
                <Text style={[globalStyles.medium_h3, globalStyles.white]}>00:{('0' + Math.round(progress.duration - progress.position)).slice(-2)}</Text>
            </View>
            <Controls forwardDisabled={progress.position > 25} onForward={() => seekTo(progress.position + 5)} />
            <Slider
                value={volume}
                onValueChange={setVolume}
            />
            <View style={[globalStyles.flexRow, globalStyles.justifySbAlignCenter]}>
                <Image source={require('../../assets/images/mute.png')} style={styles.speaker} />
                <Image source={require('../../assets/images/loud.png')} style={styles.speaker} />
            </View>

        </View>
    )
}

const normalThumb = {
    width: 10,
    height: 10
}
const bigThumb = {
    width: 20,
    height: 20
}

export default MiniPlayer
