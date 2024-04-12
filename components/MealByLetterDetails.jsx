import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, FlatList  } from 'react-native';
import Header from './Header';
import Sidebar from './Sidebar';

const MealByLetterDetails = ({ navigation, route, showSidebar}) => {
  const [meal, setMeal] = useState(null);

  // Función para cargar los detalles de la comida
  const loadMealDetails = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.mealId}`);
      const data = await response.json();
      setMeal(data.meals[0]);
    } catch (error) {
      console.error('Error fetching meal details:', error);
    }
  };

  useEffect(() => {
    loadMealDetails();
  }, []);

  return (
    <View>
      
      {showSidebar && <Sidebar navigation={navigation} />}
      <ScrollView contentContainerStyle={styles.container}>
        {meal && (
          <>
            <Text style={styles.title}>{meal.strMeal}</Text>
            <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
            <Text style={styles.subtitle}>Category: {meal.strCategory}</Text>
            <Text style={styles.subtitle}>Area: {meal.strArea}</Text>
            <Text style={styles.subtitle}>Instructions:</Text>
            <Text>{meal.strInstructions}</Text>
            <Text style={{ marginBottom: 10, fontWeight: 'bold', marginTop:20, fontSize: 20}}>Ingredientes:</Text>
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
          </>
        )}
      </ScrollView>
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
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default MealByLetterDetails;
