import { NavigationContainer } from '@react-navigation/native';
import React, { ReactElement } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux';
import MainLoader from '../components/MainLoader';
import { RootState } from '../store/store';
import HomeStack from './HomeStack';
import { navigationRef } from './RootNavigation';

const RootNavigation = (): ReactElement => {
    return (
        <NavigationContainer ref={navigationRef}>
            <HomeStack />
        </NavigationContainer>
    )
}

export default RootNavigation;
