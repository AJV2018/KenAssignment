import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { ReactElement, useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import MainLoader from '../../components/MainLoader';
import { getAlbums } from '../../services/requests';
import { addAlbumsAction } from '../../store/actions/albumActions';
import { RootState } from '../../store/store';
import styles from './styles';

const HomeScreen = (props: NativeStackScreenProps<any>): ReactElement => {
    const [loading, setLoading] = useState<boolean>(false);

    const albums = useSelector((state: RootState) => state.albums);
    const dispatch = useDispatch();

    useEffect(() => {
        handleAddAlbums()
    }, [])

    const handleAddAlbums = () => {
        console.log('handleAddAlbums')
        const offset = albums.length
        setLoading(true)
        getAlbums(offset)
            .then(data => {
                // console.log('DATA >>>', data)
                dispatch(addAlbumsAction(data.albums || []))
            }).catch(err => JSON.stringify(err))
            .finally(() => setLoading(false))
    }

    const _renderAlbumItem = ({ item, index }) => <Text>{item.name}</Text>
    return (
        <View style={styles.container}>
            <MainLoader loading={loading} />
            <FlatList
                data={albums}
                keyExtractor={(itm, index) => `${itm.id}${index}`}
                renderItem={_renderAlbumItem}
                onEndReached={handleAddAlbums}
                onEndReachedThreshold={0.5}
            />
        </View>
    )
}

export default HomeScreen;
