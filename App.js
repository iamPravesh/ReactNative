import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Pie from 'react-native-pie';
import ChartPie from './src/Screens/ChartPie';
import PersonList from './src/Screens/PersonList';
import FileUploader from './src/Screens/FileUploader';
import GetImage from './src/Screens/GetImage';
import Home from './src/Screens/Home';
import ChuckNorrisJoke from './src/Screens/ChuckNorrisJoke';
// import HomeStack from './src/Routes/HomeStack';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ChartPie" component={ChartPie} />
        <Stack.Screen name="PersonList" component={PersonList} />
        <Stack.Screen name="FileUploader" component={FileUploader} />
        <Stack.Screen name="GetImage" component={GetImage} />
        <Stack.Screen name="ChuckNorrisJoke" component={ChuckNorrisJoke} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;