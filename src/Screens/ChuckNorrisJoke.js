import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, SafeAreaView, ScrollView } from 'react-native'
import Image from 'react-native-image-progress';
import axios from 'axios';


const ChuckNorrisJoke = ({ navigation }) => {

    const [count, setCount] = useState(0);
    const [joke, setJoke] = useState('');
    const getJokes = () => {
        axios.get('https://api.chucknorris.io/jokes/random')
            .then(res => {
                setJoke(res.data.value);
            }).catch(err => {
                console.log(err);
            });
    };

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
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 40,
                }}
            >
                <Image
                    style={{
                        width: 200,
                        height: 200,
                    }}
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Chuck_Norris_May_2015.jpg' }}
                />
            </View>
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginTop: 40,
                }}
            >
                {
                    (joke == '') ? <TouchableOpacity
                        onPress={getJokes}
                        style={{
                            padding: 10,
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: 'gold',
                            width: '80%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                color: 'red',
                            }}>
                            - Get ChuckNorris fact</Text>
                    </TouchableOpacity> : <>
                        <Text
                            style={{
                                color: 'green',
                                fontSize: 20,
                                backgroundColor: 'gold',
                                padding: 10,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: 'silver',
                                marginVertical: 10,
                            }}
                        >Fact: {joke}</Text>
                        <TouchableOpacity
                            onPress={getJokes}
                            style={{
                                padding: 10,
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: 'gold',
                                width: '80%',
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
                            >Get another ChuckNorris fact</Text>
                        </TouchableOpacity>
                    </>
                }
            </View>
        </View>
    )
}

export default ChuckNorrisJoke