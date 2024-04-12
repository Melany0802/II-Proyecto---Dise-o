import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Sidebar from './Sidebar';

const ListFoodCategories = ({ navigation, showSidebar }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryPress = (category) => {
    navigation.navigate('CategoryDetails', { category });
  };

  return (
    <View style={{ flex: 1 }}> 
      {showSidebar && <Sidebar navigation={navigation} />}
      <View style={styles.container}>
        <Text style={styles.title}>List of Food Categories</Text>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.idCategory}
              style={styles.categoryItem}
              onPress={() => handleCategoryPress(category)}
            >
              <Text style={styles.categoryName}>{category.strCategory}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollView: {
    alignItems: 'center',
  },
  categoryItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ListFoodCategories;
