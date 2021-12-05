import React from 'react';
import { ICustomViewStyle } from "react-native-skeleton-content-nonexpo/lib/Constants";
import Skelton from ".";
import colors from "../../theme/colors";
import metrics from "../../theme/metrics";


const card = {
    height: '100%',
    width: '49%',
    children: [
        {
            width: '100%',
            height: '80%',
        },
        {
            width: '100%',
            height: '15%',
            marginVertical: 10
        }
    ]
}
const layout: ICustomViewStyle[] = [
    {
        flexDirection: 'row',
        height: metrics.responsiveWidth(50),
        width: metrics.responsiveWidth(90),
        children: [
            {
                ...card,
                marginRight: metrics.responsiveWidth(1.25),
            },
            {
                ...card,
                marginLeft: metrics.responsiveWidth(1.25),
            },
        ]
    }
]

const AlbumSkelton = () => <Skelton layout={layout} />

export default AlbumSkelton;
