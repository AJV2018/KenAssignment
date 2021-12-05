import React from 'react'
import { View, Text } from 'react-native'
import globalStyles from '../../theme/globalStyles'
import styles from './styles'

const Header = () => {
    return (
        <View style={styles.albumHeaderBox}>
            <Text style={[globalStyles.large_h1, globalStyles.white]}>Albums</Text>
        </View>
    )
}

export default Header
