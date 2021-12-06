import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import TrackPlayer from 'react-native-track-player';
import { useDispatch, useSelector } from 'react-redux';
import TrackItem from '../../components/AlbumComps/TrackItem';
import BackButton from '../../components/CommonComps/BackButton';
import MainLoader from '../../components/MainLoader';
import { getTracks } from '../../services/requests';
import { setTracksAction } from '../../store/actions/trackActions';
import { RootState } from '../../store/store';
import globalStyles from '../../theme/globalStyles';
import { Album } from '../../types/Album';
import { Track } from '../../types/Track';
import { playTrack } from '../../utils/trackPlayer'
import Header from '../../components/AlbumComps/Header';

const AlbumScreen = ({ navigation, route }: NativeStackScreenProps<any>) => {

    const { tracks, currentAlbum, currentTrack } = useSelector((state: RootState) => state.tracks)
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        getTracksFomApi()
    }, [currentAlbum])

    const getTracksFomApi = async () => {
        setLoading(true)
        try {
            const data = await getTracks(currentAlbum?.id)
            if (data?.tracks) {
                setError(false)
                const cTrack = tracks.find(itm => itm?.id === currentTrack)
                if (cTrack) {
                    dispatch(setTracksAction([...data.tracks, cTrack]))
                } else {
                    dispatch(setTracksAction([...data.tracks]))

                }
            } else {
                alert('Unable to fetch tracks at the moment')
                navigation.goBack()
                setError(true)
            }
        } catch (error) {
            console.log('error')
            alert(error)
            setError(true)
            navigation.goBack()
        } finally {
            setLoading(false)
        }

    }


    const _renderTrackItem = ({ item, index }) => <TrackItem item={item} index={index} onPress={() => playTrack(item?.id)} />;

    return (
        <View style={globalStyles.fullScreen}>
            <MainLoader loading={loading} />
            <BackButton onPress={() => navigation.goBack()} />
            <FlatList
                data={tracks.filter((itm: Track) => itm.albumId === currentAlbum?.id)}
                keyExtractor={(itm, index) => `${itm?.id}${index}`}
                contentContainerStyle={globalStyles.flatlistBottomPadding}
                renderItem={_renderTrackItem}
                ListHeaderComponent={<Header />}
            />
        </View>
    )
}

export default AlbumScreen;
