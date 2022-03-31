import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Pie from 'react-native-pie';

const ChartPie = () => {

    let selt = [];
    let apple = 700;
    let banana = 100;
    let grapes = 250;
    const data = [apple, banana, grapes];
    const total = apple + banana + grapes;
    const colors = ['#f00', '#00f', '#0f0'];
    for (let i = 0; i < data.length; i++) {
        const per = Math.round(data[i] / total * 100);
        selt.push(
            {
                percentage: per,
                color: colors[i],
            }
        );
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Text>Below is a Pie Chart</Text>
            <Pie
                radius={150}
                sections={selt}
                strokeCap={'butt'}
                backgroundColor={'white'}
            />
        </View>
    );
}
export default ChartPie;