import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Pie from 'react-native-pie';
import ChartPie from './src/Screens/ChartPie';
import PersonList from './src/Screens/PersonList';
import FileUploader from './src/Screens/FileUploader';
import GetImage from './src/Screens/GetImage';

const App = () => {

  return (
    <SafeAreaView>
      <ScrollView>
        {/* <GetImage /> */}
        <FileUploader />
        {/* <PersonList /> */}
        {/* <ChartPie /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;