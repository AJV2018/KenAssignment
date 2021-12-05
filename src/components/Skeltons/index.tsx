import React from 'react'
import SkeletonContent from 'react-native-skeleton-content-nonexpo'
import { ICustomViewStyle } from 'react-native-skeleton-content-nonexpo/lib/Constants'

interface SkeltonProps {
    layout: ICustomViewStyle[];
}
export default function Skelton({ layout }: SkeltonProps) {
    return (
        <SkeletonContent
            containerStyle={{ width: '100%' }}
            isLoading={true}
            boneColor="#222"
            highlightColor="#333333"
            animationType="pulse"
            layout={layout}
        />
    )
}
