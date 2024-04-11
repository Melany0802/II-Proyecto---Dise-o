// En App.js

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';
import Inicio from './components/Inicio';
import RandomFood from './components/RandomFood';
import MealsByLetter from './components/MealsByLetter';
import MealsByCountry from './components/MealsByCountry';
import MealsById from './components/MealsById';
import Sidebar from './components/Sidebar'; // Importa el componente Sidebar
import ListOfCategories from './components/ListOfCategories';

const Stack = createStackNavigator();

export default function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <NavigationContainer>
      <Header toggleSidebar={toggleSidebar} />
      <Stack.Navigator>
        <Stack.Screen name="Inicio" options={{ headerShown: false }}>
          {(props) => <Inicio {...props} showSidebar={showSidebar} />}
        </Stack.Screen>
        <Stack.Screen name="RandomFood" options={{ headerShown: false }}>
          {(props) => <RandomFood {...props} showSidebar={showSidebar} />}
        </Stack.Screen>
        <Stack.Screen name="MealsByLetter" component={MealsByLetter} options={{ headerShown: false }} />
        <Stack.Screen name="MealsByCountry" component={MealsByCountry} options={{ headerShown: false }} />
        <Stack.Screen name="MealsById" component={MealsById} options={{ headerShown: false }} />

        <Stack.Screen name="ListOfCategories" component={ListOfCategories} options={{ headerShown: false }} />
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}
