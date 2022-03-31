import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import FileViewer from 'react-native-file-viewer';
import axios from 'axios';
import * as Progress from 'react-native-progress';
import FlashMessage from "react-native-flash-message";


const FileUploader = () => {
    const [singleFile, setSingleFile] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);
    const [response, setResponse] = useState('This is the response');

    const selectOneFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            });
            setSingleFile(res);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                alert('cancelled without selecting image');
            } else {
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    };

    const openFile = () => {
        let uris = singleFile[0].uri;

        if (Platform.OS === 'ios') {
            uris = singleFile[0].uri.replace('file://', '');
        }
        FileViewer.open(uris)
            .then(() => {
                console.log('File is opened');
            })
            .catch(err => {
                console.log('File is not opened');
            });
    };

    const deletePost = () => {
        axios.delete('https://jsonplaceholder.typicode.com/photos/1')
            .then(res => {
                console.log('item deleted');
                alert('item deleted');
            })
            .catch(err => {
                console.log(err);
            });
    }

    const uploadImage = () => {
        if (singleFile.length > 0) {
            const data = {
                title: singleFile[0].name,
                url: singleFile[0].uri,
                thumbnailUrl: singleFile[0].uri,
            }
            const config = {
                onUploadProgress: progressEvent => {
                    setUploadProgress(Math.round(progressEvent.loaded * 100 / progressEvent.total));
                }
            }
            axios.post('https://jsonplaceholder.typicode.com/photos', { data }, config)
                .then(res => {
                    console.log('file posted and: ', res.data);
                    alert('file posted');
                }
                ).then(() => {
                    setSingleFile('');
                    setUploadProgress(0);
                }).catch(err => {
                    console.log(err);
                }
                );
        }
        else {
            alert('Please select a file');
        }
    };

    return (
        <View>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#00bfff',
                        padding: 10,
                        borderRadius: 5,
                        borderWidth: 3,
                        borderColor: 'yellow',
                    }}
                    onPress={selectOneFile}>
                    <Text style={{ marginRight: 10, fontSize: 22 }}>
                        Pick a photo
                    </Text>
                    <Image
                        source={{
                            uri: 'https://img.icons8.com/offices/40/000000/attach.png',
                        }}
                        style={styles.imageIconStyle}
                    />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,

                }}
            >
                {
                    (singleFile.length > 0) ?
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Text style={{ fontSize: 22, color: 'white' }}>
                                Selected Image:
                            </Text>
                            <Text style={{
                                fontSize: 12,
                                color: 'white',
                            }}>
                                {singleFile ? singleFile[0].name : null}
                            </Text>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={openFile}
                            >
                                <Image
                                    style={{
                                        width: 300,
                                        height: 350,
                                        borderWidth: 3,
                                        borderColor: 'gold',
                                    }}
                                    source={{ uri: singleFile[0].uri }}
                                />
                            </TouchableOpacity>
                        </View> : null
                }
            </View>

            {
                (singleFile.length > 0) ?
                    <>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 20,
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#00bfff',
                                    padding: 10,
                                    borderRadius: 5,
                                    borderWidth: 3,
                                    borderColor: 'yellow',
                                }}
                                onPress={uploadImage}
                            >
                                <Text style={{ color: 'red' }} >Upload selected file</Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                marginTop: 20,
                            }}
                        >
                            <Text style={{ fontSize: 22, color: 'white' }}>Upload Progress: </Text>
                            <Progress.Bar progress={uploadProgress / 10} width={200} height={10} />
                            <Text style={{ fontSize: 12, color: 'white' }}>
                                {uploadProgress}%
                            </Text>
                        </View>
                        {
                            (100 > uploadProgress) ?
                                null
                                :
                                <Text style={{ color: 'white' }}> Upload Completed </Text>
                        }
                    </> : null
            }

            {/* 

            <TouchableOpacity
                style={{
                    backgroundColor: 'white',
                    marginTop: 10,
                    marginBottom: 30,
                }}
                onPress={deletePost}
            >
                <Text style={{ color: 'black' }}> delete post </Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
    },
    textStyle: {
        backgroundColor: '#fff',
        fontSize: 15,
        marginTop: 16,
        color: 'black',
    },
    buttonStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'red',
        padding: 5,
    },
    imageIconStyle: {
        height: 20,
        width: 20,
        resizeMode: 'stretch',
    },
});

export default FileUploader