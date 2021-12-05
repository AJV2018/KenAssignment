import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import globalStyles from '../../theme/globalStyles'
import metrics from '../../theme/metrics'
import { Album } from '../../types/Album'

const Header = ({ name }) => {
    const { currentAlbum } = useSelector((state: RootState) => state.tracks)
    return (
        <View style={styles.trackHeaderBox}>
            <Image
                source={{
                    uri: `https://api.napster.com/imageserver/v2/albums/${currentAlbum.id}/images/500x500.jpg`
                }}
                style={styles.image}
            />
            <Text style={[globalStyles.bold_h1, globalStyles.white, styles.albumNameText]} >{name || currentAlbum.name}</Text>
            <Text style={[globalStyles.medium_h1, globalStyles.red]} >{currentAlbum.artistName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    trackHeaderBox: {
        padding: metrics.responsiveWidth(2.5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: metrics.responsiveWidth(70),
        height: metrics.responsiveWidth(70),
        borderRadius: 2.5
    },
    albumNameText: {
        paddingTop: metrics.responsiveWidth(5),
    },
})

export default Header
