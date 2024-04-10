// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './components/Inicio';
import RandomFood from './components/RandomFood';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
        <Stack.Screen name="RandomFood" component={RandomFood} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
