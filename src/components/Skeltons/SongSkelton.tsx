import React from "react";
import { ICustomViewStyle } from "react-native-skeleton-content-nonexpo/lib/Constants";
import Skelton from ".";
import colors from "../../theme/colors";

const layout: ICustomViewStyle[] = [
    {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 10,
        paddingHorizontal: 10,
        children: [
            {
                width: 60,
                height: 60,
                borderRadius: 10
            },
            {
                flex: 1,
                height: 60,
                backgroundColor: colors.backgroundColor,
                justifyContent: 'center',
                children: [
                    {
                        height: '20%',
                        width: '90%',
                        alignSelf: 'center'
                    },
                    {
                        height: '20%',
                        width: '90%',
                        alignSelf: 'center',
                        marginTop: 10
                    },
                    {
                        height: '20%',
                        width: '90%',
                        alignSelf: 'center',
                        marginTop: 10
                    },
                ]
            }
        ]
    }
]

const SongSkelton = () => <Skelton layout={layout} />

export default SongSkelton;
