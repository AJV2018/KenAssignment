import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import AlbumItem from '../../components/AlbumComps/AlbumItem';
import MainLoader from '../../components/MainLoader';
import AlbumSkelton from '../../components/Skeltons/AlbumSkelton';
import SongSkelton from '../../components/Skeltons/SongSkelton';
import { getAlbums, getAllArtists } from '../../services/requests';
import { addAlbumsAction, setAlbumsAction } from '../../store/actions/albumActions';
import { addArtistsAction } from '../../store/actions/artistActions';
import { setCurrentAlbumAction } from '../../store/actions/trackActions';
import { RootState } from '../../store/store';
import globalStyles from '../../theme/globalStyles';
import { Album } from '../../types/Album';
import getItemLayout from '../../utils/getItemLayout';
import { parseNewArtists } from '../../utils/parseArtists';
import Header from './Header';
import styles from './styles';

const HomeScreen = (props: NativeStackScreenProps<any>): ReactElement => {
    const [loading, setLoading] = useState<boolean>(false);

    const [error, setError] = useState(false);

    const albums: Album[] = useSelector((state: RootState) => state.albums);
    const artists = useSelector((state: RootState) => state.artists);

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
            const newArtists = await getAllArtists(data.albums, artists)
            console.log('NEW ARTSUS >>>', newArtists)
            dispatch(addArtistsAction(newArtists))
            // initially replace old albums
            if (shouldLoad) {
                dispatch(setAlbumsAction(data.albums || []))
            } else {
                dispatch(addAlbumsAction(data.albums || []))
            }
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
            alert(error)
        }
    }

    const handleAlbumPress = useCallback((album: Album) => {
        dispatch(setCurrentAlbumAction(album))
        props.navigation.navigate('AlbumScreen')
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
                keyExtractor={(itm, index) => `${itm?.id}${index}`}
                renderItem={_renderAlbumItem}
                contentContainerStyle={globalStyles.flatlistBottomPadding}
                ListHeaderComponent={<Header />}
                ListFooterComponent={_renderFooter}
                onEndReached={() => albums.length > 10 && handleAddAlbums(false)}
                onEndReachedThreshold={0.5}
            />
        </View>
    )
}

export default HomeScreen;
