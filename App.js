import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import Pie from 'react-native-pie';
import ChartPie from './src/ChartPie';
import PersonList from './src/PersonList';
import FileUploader from './src/FileUploader';
import axios from 'axios';


const App = () => {
  var [images, setImages] = useState(null);
  var [images2, setImages2] = useState(null);
  var [images3, setImages3] = useState(null);
  var [images4, setImages4] = useState(null);

  const getImages = () => axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(res => {
      setImages(res.data[0]);
      setImages2(res.data[1]);
      setImages3(res.data[2]);
      setImages4(res.data[5000]);
      console.log('this da images', images);
      console.log('this da images2', images2);
    }
    ).catch(err => {
      console.log(err);
    });

  return (
    <SafeAreaView>
      <ScrollView>

        {/* Pie Chart */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}>
          {/* <ChartPie /> */}
          {/* <PersonList /> */}
          <FileUploader />
        </View>

        <TouchableOpacity
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
          }}
          onPress={getImages}

        >
          <Text style={{ color: 'white', fontSize: 25 }} > Press this button to get images </Text>
        </TouchableOpacity>

        <View>
          {
            (images == null) ? null :
              <View>
                <Image
                  style={{ width: 200, height: 200 }}
                  source={{ uri: images.url }}
                />
              </View>
          }
          {
            (images2 == null) ? null :
              <View>
                <Image
                  style={{ width: 200, height: 200 }}
                  source={{ uri: images2.url }}
                />
              </View>
          }
          {
            (images3 == null) ? null :
              <View>
                <Image
                  style={{ width: 200, height: 200 }}
                  source={{ uri: images3.url }}
                />
              </View>
          }
          {
            (images4 == null) ? null :
              <View>
                <Image
                  style={{ width: 200, height: 200 }}
                  source={{ uri: images4.url }}
                />
              </View>
          }
          {/* {
            images.map(image => (
              <View>
                <Image
                  style={{ width: 200, height: 200 }}
                  source={{ uri: image.url }}
                />
              </View>
            ))
          } */}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
export default App;