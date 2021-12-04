import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { ReactElement } from 'react'
import { View, Text } from 'react-native'
import HomeScreen from '../screens/Home'
const Stack = createNativeStackNavigator()
const HomeStack = (): ReactElement => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default HomeStack;