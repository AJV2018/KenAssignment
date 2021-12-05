import React from 'react'
import { View, Text } from 'react-native'
import globalStyles from '../../theme/globalStyles'
import { Album } from '../../types/Album'
import styles from './styles'
interface HeaderProps {
    album: Album
}
const Header = ({ album }: HeaderProps) => {
    return (
        <View style={styles.trackHeaderBox}>
        </View>
    )
}

export default Header
