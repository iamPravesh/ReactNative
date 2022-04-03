import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Pie from 'react-native-pie';
import ChartPie from './src/Screens/ChartPie';
import PersonList from './src/Screens/PersonList';
import FileUploader from './src/Screens/FileUploader';
import GetImage from './src/Screens/GetImage';
import Home from './src/Screens/Home';
import ChuckNorrisJoke from './src/Screens/ChuckNorrisJoke';
import Game from './src/Screens/Game';
import Flower from './src/Screens/Flower';
import PersonNav from './src/Routes/PersonNav';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  score: 0,
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_SCORE':
      return {
        ...state,
        score: state.score + 1,
      };
    case 'DECREASE_SCORE':
      return {
        ...state,
        score: state.score - 1,
      };
  }
  return state;
}
const store = createStore(reducer);

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ChartPie" component={ChartPie} />
          <Stack.Screen name="PersonNav" component={PersonNav} />
          <Stack.Screen name="FileUploader" component={FileUploader} />
          {/* <Stack.Screen name="GetImage" component={GetImage} /> */}
          <Stack.Screen name="ChuckNorrisJoke" component={ChuckNorrisJoke} />
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="Flower" component={Flower} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;