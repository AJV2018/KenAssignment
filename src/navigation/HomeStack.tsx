import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { ReactElement } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { color } from 'react-native-reanimated'
import MainLoader from '../components/MainLoader'
import AlbumScreen from '../screens/Album'
import HomeScreen from '../screens/Home'
import Player from '../screens/Player'
import colors from '../theme/colors'

const Stack = createNativeStackNavigator()

const HomeStack = (): ReactElement => {
    return (
        <>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.black} />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
                <Stack.Screen name={'AlbumScreen'} component={AlbumScreen} />
                <Stack.Screen name={'PlayerScreen'} component={Player} />
            </Stack.Navigator>
        </>
    )
}

export default HomeStack;