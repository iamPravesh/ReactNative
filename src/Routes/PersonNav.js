import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PersonList from '../Screens/PersonList';
import GetImage from '../Screens/GetImage';



const Stack = createNativeStackNavigator();

const PersonNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PersonList" component={PersonList} />
            <Stack.Screen name="GetImage" component={GetImage} />
        </Stack.Navigator>
    )
}

export default PersonNav;