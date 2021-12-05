import React, { memo } from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import colors from '../../theme/colors'
import globalStyles from '../../theme/globalStyles'
import metrics from '../../theme/metrics'
import { Album } from '../../types/Album'
import * as _ from 'lodash';
interface AlbumItemProps {
    item: Album;
    onPress: () => void;
    index: number;
}
const AlbumItem = ({ item, onPress, index }: AlbumItemProps) => {
    const isEven = index % 2 === 0;
    return (
        <Pressable style={[styles.container, isEven ? styles.rightMargin : styles.leftMargin]} onPress={onPress}>
            <Image
                source={{
                    uri: `https://api.napster.com/imageserver/v2/albums/${item.id}/images/500x500.jpg`
                }}
                style={styles.imageStyles}
            />
            <Text style={[globalStyles.medium_h3, globalStyles.white, styles.textMargins]} >{item.name}</Text>
            <Text style={[globalStyles.regular_h3, globalStyles.white, styles.textMargins]} >{item.artistName}</Text>
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
    },
    rightMargin: {
        marginRight: metrics.responsiveWidth(1.25),
    },
    leftMargin: {
        marginLeft: metrics.responsiveWidth(1.25),
    },
    imageStyles: {
        width: '100%',
        height: metrics.responsiveWidth(45),
        borderTopLeftRadius: 2.5,
        borderTopRightRadius: 2.5
    },
    textBox: {
        paddingHorizontal: metrics.responsiveWidth(2.5),
        paddingVertical: metrics.responsiveWidth(1.25),
        justifyContent: 'space-between',
    },
    textMargins: {
        paddingHorizontal: metrics.responsiveWidth(2.5),
    }
})
