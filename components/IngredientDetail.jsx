import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IngredientDetail = ({ route }) => {
  const { ingredient } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingredient Detail</Text>
      <Text>ID: {ingredient.idIngredient}</Text>
      <Text>Name: {ingredient.strIngredient}</Text>
      <Text>Description: {ingredient.strDescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 25,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  }
});

export default IngredientDetail;
