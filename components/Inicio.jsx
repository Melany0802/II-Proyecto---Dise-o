// Inicio.jsx
import React from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Header from './Header';

const RandomFoods = require('../assets/ImagesApp/RandomFood.png');
const MealsBLetter = require('../assets/ImagesApp/MealsBLetter.png');
const MealsBCountry = require('../assets/ImagesApp/MealsBCountry.png');
const MealsBId = require('../assets/ImagesApp/MealsBId.png');


const Inicio = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('RandomFood')}>
          <View style={styles.buttonWrapper}>
            <Image source={RandomFoods} style={styles.buttonImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('RandomFood')}>
          <View style={styles.buttonWrapper}>
            <Image source={MealsBLetter} style={styles.buttonImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('RandomFood')}>
          <View style={styles.buttonWrapper}>
            <Image source={MealsBCountry} style={styles.buttonImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('RandomFood')}>
          <View style={styles.buttonWrapper}>
            <Image source={MealsBId} style={styles.buttonImage} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = {
  scrollContainer: {
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flex: 1,
    marginBottom: 5,
    marginTop: 25,
  },
  buttonWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
};

export default Inicio;
