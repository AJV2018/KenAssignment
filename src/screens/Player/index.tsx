import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { useProgress } from 'react-native-track-player'
import { useSelector } from 'react-redux'
import BackButton from '../../components/CommonComps/BackButton'
import { RootState } from '../../store/store'
import globalStyles from '../../theme/globalStyles'
import { Track } from '../../types/Track'
import Header from '../../components/AlbumComps/Header'
import MainPlayer from '../../components/MainPlayer'
import styles from './styles'
const PlayerScreen = ({ navigation, route }: NativeStackScreenProps<any>) => {
    const progress = useProgress(200)
    const { tracks, currentTrack } = useSelector((state: RootState) => state.tracks);
    const cTrack = tracks.find((itm: Track) => itm?.id === currentTrack) || {}
    return (
        <View style={globalStyles.fullScreen}>
            <BackButton onPress={() => navigation.goBack()} />
            <View style={styles.imageBox}>
                <Image
                    source={{
                        uri: `https://api.napster.com/imageserver/v2/albums/${cTrack.albumId}/images/500x500.jpg`
                    }}
                    style={styles.image}
                />
            </View>
            <MainPlayer />
        </View>
    )
}

export default PlayerScreen
