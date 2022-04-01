import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Pie from 'react-native-pie';

const ChartPie = ({ navigation }) => {

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
                flexDirection: 'column',
                justifyContent: "flex-start",
                backgroundColor: '#000',
            }}>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingTop: 20,
                    paddingLeft: 20,
                }}
            >
                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}
                    style={{
                        padding: 10,
                        backgroundColor: '#fff',
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: 'gold',
                        width: '20%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            color: 'red',
                        }}
                    >Back</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>Below is a Pie Chart</Text>
                <Pie
                    radius={150}
                    sections={selt}
                    strokeCap={'butt'}
                    backgroundColor={'white'}
                />
            </View>
        </View>
    );
}
export default ChartPie;