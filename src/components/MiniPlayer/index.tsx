import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { useProgress } from 'react-native-track-player'
import * as Progress from 'react-native-progress';
import metrics from '../../theme/metrics';
import colors from '../../theme/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Track } from '../../types/Track';
import globalStyles from '../../theme/globalStyles';
import MiniControls from './MiniControls';
import styles from './styles';
import { navigate } from '../../navigation/RootNavigation';
import { useNavigationState } from '@react-navigation/core';
const MiniPlayer = () => {
    const progress = useProgress(200)
    const { tracks, currentTrack } = useSelector((state: RootState) => state.tracks);
    const cTrack = tracks.find((itm: Track) => itm.id === currentTrack) || {}
    const state = useNavigationState(state => state);
    const isPlayerScreen = state?.routes[state?.index].name === 'PlayerScreen'
    if ((progress.position == 0) || isPlayerScreen || !currentTrack) {
        return null
    }
    return (
        <Pressable
            style={styles.container}
            onPress={() => navigate('PlayerScreen')}
        >
            <View style={styles.innerRow}>
                <View style={styles.imageBox}>
                    <Image
                        source={{
                            uri: `https://api.napster.com/imageserver/v2/albums/${cTrack.albumId}/images/300x300.jpg`
                        }}
                        style={styles.image}
                    />
                </View>
                <Text style={[globalStyles.medium_h2, globalStyles.white, styles.trackName]} >{cTrack.name}</Text>
                <MiniControls />
            </View>
            <Progress.Bar
                useNativeDriver={true}
                progress={progress.position / progress.duration}
                width={metrics.screenWidth}
                borderRadius={0}
                borderWidth={0}
                color={colors.red}
            />
        </Pressable>
    )
}

export default MiniPlayer
