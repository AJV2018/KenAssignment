import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { ReactElement, useEffect } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { color } from 'react-native-reanimated'
import TrackPlayer, { Event, State, useTrackPlayerEvents } from 'react-native-track-player'
import { useDispatch, useSelector } from 'react-redux'
import MainLoader from '../components/MainLoader'
import MiniPlayer from '../components/MiniPlayer'
import AlbumScreen from '../screens/Album'
import HomeScreen from '../screens/Home'
import Player from '../screens/Player'
import { setCurrentTrackAction, setPlaybackStateAction } from '../store/actions/trackActions'
import { RootState } from '../store/store'
import colors from '../theme/colors'
import { refineApiTracks } from '../utils/trackRefiner';
const Stack = createNativeStackNavigator()

const HomeStack = (): ReactElement => {
    const { tracks } = useSelector((state: RootState) => state.tracks);
    const dispatch = useDispatch();


    useTrackPlayerEvents([Event.PlaybackTrackChanged, Event.PlaybackState], async event => {
        if (event.type === Event.PlaybackTrackChanged) {
            const state = await TrackPlayer.getState();
            if (state === 3) {
                dispatch(setPlaybackStateAction(state))
            }
            if (event.nextTrack != null) {
                const track = await TrackPlayer.getTrack(event.nextTrack);
                dispatch(setCurrentTrackAction(track?.id))
            } else {
                dispatch(setCurrentTrackAction(''))
            }
        }
        if (event.type === Event.PlaybackState) {
            console.log('STATE 2 >>> ', event.state)
            dispatch(setPlaybackStateAction(event.state))
        }
    });

    useEffect(() => {
        (
            async () => {
                const refinedTracks = tracks.filter(itm => itm ? true : false).map(track => refineApiTracks(track));
                const queue = await TrackPlayer.getQueue();
                await TrackPlayer.remove(queue.map((itm, idx) => idx))
                await TrackPlayer.add(refinedTracks)
            }
        )()
    }, [tracks])
    return (
        <>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.black} />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
                <Stack.Screen name={'AlbumScreen'} component={AlbumScreen} />
                <Stack.Screen name={'PlayerScreen'} component={Player} />
            </Stack.Navigator>
            <MiniPlayer />
        </>
    )
}

export default HomeStack;