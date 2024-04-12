import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CategoryDetails = ({ route }) => {
  const { category } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>{`ID: ${category.idCategory}`}</Text>
        <Text style={styles.label}>{`Category: ${category.strCategory}`}</Text>
      </View>
      <Image source={{ uri: category.strCategoryThumb }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.label }>Description:</Text>
        <Text style={styles.description}>{category.strCategoryDescription}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
    marginTop:15,
    padding:50,
  },
  infoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 50,
    marginTop:50,
  },
  detailsContainer: {
  },
  description: {
    fontSize: 16,
  },
  label: {
    marginBottom: 5,
   
  },
});

export default CategoryDetails;
