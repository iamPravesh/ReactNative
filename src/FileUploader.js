import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import FileViewer from 'react-native-file-viewer';
import axios from 'axios';


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
                alert('cancelled without selecting file');
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

    const handleProgress = (event) => {
        setUploadProgress(Math.round(event.loaded * 100 / event.total));
    }

    const deletePost = () => {
        axios.delete('https://jsonplaceholder.typicode.com/photos/1')
            .then(res => {
                console.log('item deleted');
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
            axios.post('https://jsonplaceholder.typicode.com/photos', { data })
                .then(res => {
                    console.log('file posted and: ', res.data);
                    alert('file posted');
                }
                ).catch(err => {
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
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.buttonStyle}
                onPress={selectOneFile}>
                <Text style={{ marginRight: 10, fontSize: 19 }}>
                    Click here to pick one file
                </Text>
                <Image
                    source={{
                        uri: 'https://img.icons8.com/offices/40/000000/attach.png',
                    }}
                    style={styles.imageIconStyle}
                />
            </TouchableOpacity>
            <Text style={styles.textStyle}>
                File Name: {singleFile ? singleFile[0].name : 'here comes file name'}
            </Text>

            <TouchableOpacity
                style={{
                    backgroundColor: '#00bfff',
                    marginTop: 10,
                }}
                onPress={openFile}
            >
                <Text style={{ color: 'red' }} >View selected file</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    backgroundColor: 'blue',
                    marginTop: 10,
                    marginBottom: 30,
                }}
                onPress={uploadImage}
            >
                <Text style={{ color: 'red' }} >Upload selected file</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    backgroundColor: 'white',
                    marginTop: 10,
                    marginBottom: 30,
                }}
                onPress={deletePost}
            >
                <Text style={{ color: 'black' }}> delete post </Text>
            </TouchableOpacity>
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