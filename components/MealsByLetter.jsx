import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Sidebar from './Sidebar';

const MealsByLetter = ({ navigation, route, showSidebar }) => {
  const [meals, setMeals] = useState([]);

  const loadMeals = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${route.params.letter}`);
      const data = await response.json();
      setMeals(data.meals);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  useEffect(() => {
    loadMeals();
  }, [route.params.letter]);

  const handleMealPress = (mealId) => {
    navigation.navigate('MealByLetterDetails', { mealId });
  };

  return (
    <View style={styles.container}>
      {showSidebar && <Sidebar navigation={navigation} />}
      <Text style={styles.title}>{`Meals By Letter - ${route.params.letter}`}</Text>
      <ScrollView contentContainerStyle={styles.mealsContainer}>
        {meals.map((meal) => (
          <TouchableOpacity key={meal.idMeal} style={styles.mealItem} onPress={() => handleMealPress(meal.idMeal)}>
            <Text style={styles.mealName}>{meal.strMeal}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  mealsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  mealItem: {
    width: '48%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  mealName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MealsByLetter;
