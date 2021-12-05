import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import AlbumItem from '../../components/AlbumComps/AlbumItem';
import MainLoader from '../../components/MainLoader';
import AlbumSkelton from '../../components/Skeltons/AlbumSkelton';
import SongSkelton from '../../components/Skeltons/SongSkelton';
import { getAlbums } from '../../services/requests';
import { addAlbumsAction, setAlbumsAction } from '../../store/actions/albumActions';
import { RootState } from '../../store/store';
import { Album } from '../../types/Album';
import getItemLayout from '../../utils/getItemLayout';
import Header from './Header';
import styles from './styles';

const HomeScreen = (props: NativeStackScreenProps<any>): ReactElement => {
    const [loading, setLoading] = useState<boolean>(false);

    const [error, setError] = useState(false);

    const albums: Album[] = useSelector((state: RootState) => state.albums);

    const dispatch = useDispatch();

    useEffect(() => {
        handleAddAlbums(true)
    }, [])

    const handleAddAlbums = async (shouldLoad: boolean) => {
        const offset = shouldLoad ? 0 : albums.length
        console.log('OFFSET >>>', offset)
        if (offset > 500) {
            return
        }
        if (shouldLoad) {
            setLoading(true)
        }

        try {
            const data = await getAlbums(offset)
            setError(false)

            // initially replace old albums
            if (shouldLoad) {
                dispatch(setAlbumsAction(data.albums || []))
            } else {
                dispatch(addAlbumsAction(data.albums || []))
            }
        } catch (error) {
            alert(error)
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    const handleAlbumPress = useCallback((album: Album) => {
        props.navigation.navigate('AlbumScreen', { album });
    }, [])


    const _renderAlbumItem = ({ item, index }) => <AlbumItem index={index} item={item} onPress={() => handleAlbumPress(item)} />
    const _renderFooter = () => (
        error ?
            <>
                <Text style={styles.errorText}>Something went wrong!</Text>
                <Text style={styles.retryText} onPress={() => handleAddAlbums(true)}>retry</Text>
            </>
            :
            (albums.length < 500 && <AlbumSkelton />)
    );

    return (
        <View style={styles.container}>
            <MainLoader loading={loading} />
            <FlatList
                data={albums}
                numColumns={2}
                keyExtractor={(itm, index) => `${itm.id}${index}`}
                renderItem={_renderAlbumItem}
                ListHeaderComponent={<Header />}
                ListFooterComponent={_renderFooter}
                onEndReached={() => albums.length > 10 && handleAddAlbums(false)}
                onEndReachedThreshold={0.5}
            />
        </View>
    )
}

export default HomeScreen;
