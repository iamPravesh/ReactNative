import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform, SafeAreaView, ScrollView } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View style={{
            backgroundColor: '#000',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: 20,

        }}>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginBottom: 20,
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        color: 'gold',
                        fontWeight: 'bold',
                    }}
                >Hello, This is a practice app :)</Text>
                <Text
                    style={{
                        fontSize: 18,
                        color: 'yellow',
                        fontWeight: 'bold',
                    }}
                >Please feel free to navigate around the app.</Text>
            </View>
            <ScrollView>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        padding: 10,
                    }}
                >
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('ChartPie')
                    }}
                        style={styles.buttons}
                    >
                        <Text style={styles.butText} >PIE CHART</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('PersonList')
                    }}
                        style={styles.buttons}
                    >
                        <Text style={styles.butText} >Random Person Name</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('FileUploader')
                    }}
                        style={styles.buttons}
                    >
                        <Text style={styles.butText} >Pick and upload Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('GetImage')
                    }}
                        style={styles.buttons}
                    >
                        <Text style={styles.butText} >Get random image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('ChuckNorrisJoke')
                    }}
                        style={styles.buttons}
                    >
                        <Text style={styles.butText} >Chuck Norris Fact</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'yellow',
        height: 100,
        width: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    butText: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
    },
})

export default Home