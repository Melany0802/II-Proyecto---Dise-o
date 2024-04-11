import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './Header';
import Sidebar from './Sidebar';

const ListOfIngredients = ({ navigation, showSidebar }) => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then(response => response.json())
      .then(data => {
        if (data && data.meals) {
          setIngredients(data.meals);
        }
      })
      .catch(error => console.error('Error fetching ingredients:', error));
  }, []);

  const handleIngredientPress = (ingredient) => {
    navigation.navigate('IngredientDetail', { ingredient });
  };

  return (
    <View style={styles.container}>
      
      {showSidebar && <Sidebar navigation={navigation} />}
      <Text style={styles.title}>Ingredients FM</Text>
      <ScrollView>
        {ingredients.map(ingredient => (
          <TouchableOpacity
            key={ingredient.idIngredient}
            style={styles.ingredientItem}
            onPress={() => handleIngredientPress(ingredient)}>
            <Text style={styles.ingredientName}>{ingredient.strIngredient}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  ingredientItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  ingredientName: {
    fontSize: 14,
  },
});

export default ListOfIngredients;
