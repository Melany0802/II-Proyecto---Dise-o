// En Sidebar.jsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Sidebar = ({ navigation }) => {
  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
    
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleNavigation('Inicio')} style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('ListOfCategories')} style={styles.button}>
        <Text style={styles.buttonText}>List Of Categories</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('ListOfCountries')} style={styles.button}>
        <Text style={styles.buttonText}>List Of Countries</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('ListOfIngredients')} style={styles.button}>
        <Text style={styles.buttonText}>List Of Ingredients</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('ListFoodCategories')} style={styles.button}>
        <Text style={styles.buttonText}>List Food Categories</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 90, // Ajusta la posición para que esté debajo del header
    left: 0,
    width: '100%', // Cambia el ancho para que ocupe todo el espacio disponible
    backgroundColor: '#FFFFFF',
    padding: 20,
    zIndex: 999, // Asegura que el sidebar esté por encima del contenido
    marginTop:-100,
  },
  button: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Sidebar;
