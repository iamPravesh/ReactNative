import React from 'react';
import { Text, View } from 'react-native';
import Pie from 'react-native-pie';
import ChartPie from './src/ChartPie';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <ChartPie />
    </View>
  );
}
export default App;