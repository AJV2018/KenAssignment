import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { ReactElement } from 'react'
import { View, Text } from 'react-native'
import styles from './styles';

const HomeScreen = (props: NativeStackScreenProps<any>): ReactElement => {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    )
}

export default HomeScreen;
