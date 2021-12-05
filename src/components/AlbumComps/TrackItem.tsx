import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import colors from '../../theme/colors';
import globalStyles from '../../theme/globalStyles';
import metrics from '../../theme/metrics';
import { Track } from '../../types/Track';
import { getArtistsFromAlbum, getArtistsFromTrack } from '../../utils/parseArtists';
import PlayingLottie from '../CommonComps/PlayingLottie';
interface TrackItemProps {
    item: Track;
    onPress: () => void;
    index: number;
}
const TrackItem = ({ item, index, onPress }: TrackItemProps) => {
    const { currentTrack, playingState } = useSelector((state: RootState) => state.tracks)
    const isPlaying = (item.id === currentTrack) && playingState == 3;
    const artists = useSelector((state: RootState) => state.artists);
    const artistStr = getArtistsFromTrack(item, artists)
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.box1}>
                {
                    isPlaying ?
                        <PlayingLottie />
                        :
                        <Text style={[globalStyles.regular_h3, globalStyles.lightGrey]}>{index + 1}</Text>
                }
            </View>
            <View style={styles.box2}>
                <Text style={[
                    globalStyles.regular_h2,
                    isPlaying ? globalStyles.red : globalStyles.white
                ]}>{item.name}</Text>
                <Text style={[
                    globalStyles.regular_h3,
                    isPlaying ? globalStyles.red : globalStyles.white
                ]}>{artistStr || item.artistName}</Text>
            </View>
            <View style={styles.box3}>
                <Text style={[
                    globalStyles.regular_h3,
                    globalStyles.lightGrey,
                    styles.minText
                ]}>{Math.round(item.playbackSeconds / 60)} min</Text>
            </View>
        </Pressable>
    )
}

export default TrackItem;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: metrics.responsiveWidth(2.5),
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: metrics.responsiveWidth(2)
    },
    box1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '15%',
    },
    box2: {
        width: '70%',
        borderBottomColor: '#555',
        borderBottomWidth: 0.3,
        paddingBottom: metrics.responsiveWidth(2)
    },
    box3: {
        width: '15%',
        height: "100%",
        // justifyContent: 'center',
        // alignItems: "center",
        borderBottomColor: '#555',
        borderBottomWidth: 0.3,
        paddingBottom: metrics.responsiveWidth(2)
    },
    minText: {
        textAlign: "center",
        textAlignVertical: 'center',
        flex: 1
    }
})
