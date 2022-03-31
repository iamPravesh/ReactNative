import React, { useState } from 'react';
import axios from 'axios';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Image from 'react-native-image-progress';
import FileViewer from 'react-native-file-viewer';


const GetImage = () => {
    var [images, setImages] = useState(null);

    const getImages = () => axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
            setImages(res.data[Math.floor(Math.random() * (4999 - 0)) + 0]);
        }
        ).catch(err => {
            console.log(err);
        });

    const openImage = () => {
        let uris = images.url;

        if (Platform.OS === 'ios') {
            uris = images.url.replace('file://', '');
        }
        FileViewer.open(uris)
            .then(() => {
                console.log('File is opened');
            })
            .catch(err => {
                console.log(uris);
                alert('File is not opened');
            });
    };

    return (
        <View>
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}
            >
                <TouchableOpacity
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'blue',
                        padding: 5,
                        borderRadius: 10,
                        margin: 5,
                        borderWidth: 2,
                        borderColor: 'white',
                    }}
                    onPress={getImages}
                >
                    <Text style={{ color: 'white', fontSize: 25, }} >Get Image</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    margin: 5,
                }}>
                {
                    (images == null) ? null :
                        <View>
                            <TouchableOpacity style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}
                                onPress={openImage}>
                                <Image
                                    style={{
                                        width: 200,
                                        height: 200,
                                        borderWidth: 2,
                                        borderColor: 'red',
                                    }}
                                    source={{ uri: images.url }}
                                />
                            </TouchableOpacity>
                            <View style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}>
                                <Text style={{ color: 'white', fontSize: 18 }}>This image is brought by the courtesy of: </Text>
                                <TouchableOpacity onPress={() => Linking.openURL('https://jsonplaceholder.typicode.com/photos')}>
                                    <Text style={{ color: 'white', fontSize: 25, textDecorationLine: 'underline' }}>
                                        Open API
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                }
            </View>
        </View >
    )
}
export default GetImage;