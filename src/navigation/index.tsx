import { NavigationContainer } from '@react-navigation/native';
import React, { ReactElement } from 'react'
import { View, Text } from 'react-native'
import HomeStack from './HomeStack';

const RootNavigation = (): ReactElement => {
    return (
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    )
}

export default RootNavigation;
