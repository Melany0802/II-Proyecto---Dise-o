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
import ListOfCountries from './components/ListOfCountries';
import ListOfIngredients from './components/ListOfIngredients';
import ListFoodCategories from './components/ListFoodCategories';
import IngredientDetail from './components/IngredientDetail'; // Importa el componente IngredientDetail

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
        <Stack.Screen name="MealsByLetter" options={{ headerShown: false }}>
          {(props) => <MealsByLetter {...props} showSidebar={showSidebar} />}
        </Stack.Screen>
        <Stack.Screen name="MealsByCountry" options={{ headerShown: false }}>
          {(props) => <MealsByCountry {...props} showSidebar={showSidebar} />}
        </Stack.Screen>
        <Stack.Screen name="MealsById" options={{ headerShown: false }}>
          {(props) => <MealsById {...props} showSidebar={showSidebar} />}
        </Stack.Screen>

        <Stack.Screen name="ListOfCategories" options={{ headerShown: false }}>
          {(props) => <ListOfCategories {...props} showSidebar={showSidebar} />}
        </Stack.Screen>
        <Stack.Screen name="ListOfCountries" options={{ headerShown: false }}>
          {(props) => <ListOfCountries {...props} showSidebar={showSidebar} />}
        </Stack.Screen>
        <Stack.Screen name="ListOfIngredients" options={{ headerShown: false }}>
          {(props) => <ListOfIngredients {...props} showSidebar={showSidebar} />}
        </Stack.Screen>
        <Stack.Screen name="ListFoodCategories" options={{ headerShown: false }}>
          {(props) => <ListFoodCategories {...props} showSidebar={showSidebar} />}
        </Stack.Screen>


        <Stack.Screen name="IngredientDetail" options={{ headerShown: false }}>
          {(props) => <IngredientDetail {...props} showSidebar={showSidebar} />}
        </Stack.Screen>

       </Stack.Navigator>
    </NavigationContainer>
  );
}
