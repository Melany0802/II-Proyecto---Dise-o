// RandomFood.jsx
import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, FlatList } from 'react-native';
import Header from './Header';

const RandomFood = ({ navigation }) => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetchRandomMeal();
  }, []);

  const fetchRandomMeal = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setMeal(data.meals[0]);
    } catch (error) {
      console.error('Error fetching random meal:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      {meal && (
        <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20 }}>
          <View style={{ alignItems: 'flex-end', marginBottom: 10 }}>
            <Text>ID del platillo: {meal.idMeal}</Text>
            <Text>Categoría: {meal.strCategory}</Text>
            <Text>Área: {meal.strArea}</Text>
          </View>
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
            {meal.strMeal}
          </Text>
          <Image source={{ uri: meal.strMealThumb }} style={{ width: '100%', height: 200, marginBottom: 10 }} />
          <Text style={{ marginBottom: 10 }}>Etiquetas: {meal.strTags}</Text>
          <Text style={{ marginBottom: 10 }}>Instrucciones: {meal.strInstructions}</Text>
          <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>Ingredientes:</Text>
          <FlatList
            data={getIngredients(meal)}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                <Image source={{ uri: item.image }} style={{ width: 60, height: 60, marginRight: 10 }} />
                <Text>{item.name}: {item.measure}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      )}
    </View>
  );
};

const getIngredients = (meal) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push({
        name: ingredient,
        measure: measure,
        image: `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`
      });
    }
  }
  return ingredients;
};

export default RandomFood;
