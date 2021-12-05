import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import BackButton from '../../components/CommonComps/BackButton';
import globalStyles from '../../theme/globalStyles';
import Header from './Header';

const AlbumScreen = ({ navigation, route }: NativeStackScreenProps<any>) => {
    const { album } = route.params || {}

    const [tracks, setTracks] = useState([]);

    const _renderTrackItem = ({ item, index }) => null;

    return (
        <View style={globalStyles.fullScreen}>
            <BackButton onPress={() => navigation.goBack()} />
            <FlatList
                data={tracks}
                keyExtractor={(itm, index) => `${itm.id}${index}`}
                renderItem={_renderTrackItem}
                ListHeaderComponent={<Header album={album} />}
            // ListFooterComponent={_renderFooter}
            />
        </View>
    )
}

export default AlbumScreen;
