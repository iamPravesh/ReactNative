import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform, SafeAreaView, ScrollView } from 'react-native'
import axios from 'axios'

const Flower = ({ navigation }) => {

    const getFlower = () => {
        axios.get('http://localhost:5022/api/post', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => {
                console.log(res.status)
            })
            .catch(err => {
                console.log(err)
            })
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
                    onPress={() => navigation.goBack()}
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
            <Text>Flower</Text>
            <TouchableOpacity onPress={getFlower}
            >
                <Text
                    style={{
                        fontSize: 20,
                        color: 'gold',
                    }}
                >Get Flower</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Flower