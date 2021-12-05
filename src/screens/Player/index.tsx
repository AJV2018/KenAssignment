import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import TrackPlayer from 'react-native-track-player'
import * as tracks from '../../../test.json'
const PlayerScreen = () => {
    const t = tracks.tracks[0]
    const track1 = {
        url: t.previewURL, // Load media from the network
        title: t.name,
        artist: t.artistName,
        album: t.albumName,
        genre: 'Progressive House, Electro House',
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        artwork: 'http://example.com/cover.png', // Load artwork from the network
        duration: 402 // Duration in seconds
    };

    useEffect(() => {
        init()
    })

    const init = async () => {
        await TrackPlayer.add([track1]);
        TrackPlayer.play();
        return () => {
            TrackPlayer.reset()
        }
    }
    return (
        <View>
            <Text>Apple</Text>
        </View>
    )
}

export default PlayerScreen;
