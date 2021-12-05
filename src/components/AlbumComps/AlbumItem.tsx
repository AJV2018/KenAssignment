import React, { memo } from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import colors from '../../theme/colors'
import globalStyles from '../../theme/globalStyles'
import metrics from '../../theme/metrics'
import { Album } from '../../types/Album'
import * as _ from 'lodash';
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { getArtistsFromAlbum } from '../../utils/parseArtists'
import { getReleaseDate } from '../../utils/dateTime'
interface AlbumItemProps {
    item: Album;
    onPress: () => void;
    index: number;
}
const AlbumItem = ({ item, onPress, index }: AlbumItemProps) => {
    const artists = useSelector((state: RootState) => state.artists);
    const isEven = index % 2 === 0;
    const artistStr = getArtistsFromAlbum(item, artists)
    return (
        <Pressable style={[styles.container, isEven ? styles.rightMargin : styles.leftMargin]} onPress={onPress}>
            <Image
                source={{
                    uri: `https://api.napster.com/imageserver/v2/albums/${item.id}/images/300x300.jpg`
                }}
                style={styles.imageStyles}
            />
            <Text style={[globalStyles.regular_h3, globalStyles.white, styles.textMargins]} >{item.name}</Text>
            <Text style={[globalStyles.medium_h3, globalStyles.white, styles.textMargins]} >{artistStr || item.artistName}</Text>
            <View style={[globalStyles.flexRow, globalStyles.justifySbAlignCenter]}>
                <Text style={[globalStyles.regular_h3, globalStyles.white, styles.textMargins]} >{getReleaseDate(item.released)}</Text>
                <Text style={[globalStyles.regular_h3, globalStyles.white, styles.textMargins]} >{item.trackCount} songs</Text>
            </View>
        </Pressable>
    )
}

function areEqual(prevProps: AlbumItemProps, nextProps: AlbumItemProps) {
    return _.isEqual(prevProps.item, nextProps.item)
}

export default memo(AlbumItem, areEqual);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: metrics.responsiveWidth(2.5),
        borderRadius: 2.5,
        backgroundColor: colors.cardBackground,
        justifyContent: 'space-between',
        paddingBottom: metrics.responsiveWidth(1.25)
    },
    rightMargin: {
        marginRight: metrics.responsiveWidth(1.25),
    },
    leftMargin: {
        marginLeft: metrics.responsiveWidth(1.25),
    },
    imageStyles: {
        width: '100%',
        height: metrics.responsiveWidth(40),
        borderTopLeftRadius: 2.5,
        borderTopRightRadius: 2.5,
        marginBottom: metrics.responsiveWidth(1.25)
    },
    textBox: {
        padding: metrics.responsiveWidth(2.5),
        paddingVertical: metrics.responsiveWidth(1.25),
        justifyContent: 'space-between',
    },
    textMargins: {
        paddingHorizontal: metrics.responsiveWidth(2.5),
        paddingVertical: metrics.responsiveWidth(1.25),
        borderBottomColor: 'grey',
    }
})
