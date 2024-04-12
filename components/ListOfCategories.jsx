import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Header from './Header';
import Sidebar from './Sidebar';

const ListOfCategories = ({ navigation, showSidebar }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Lógica para obtener la lista de categorías desde la API
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then(response => response.json())
      .then(data => {
        if (data && data.meals) {
          const categoriesData = data.meals.map(item => item.strCategory);
          setCategories(categoriesData);
        }
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <View style={styles.container}>
      {showSidebar && <Sidebar navigation={navigation} />}
      <Text style={styles.title}>Categories FM</Text>
      <ScrollView>
        {categories.map(category => (
          <View key={category} style={styles.categoryItem}>
            <Text>{category}</Text>
          </View>
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
  categoryItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    
  },
});

export default ListOfCategories;
