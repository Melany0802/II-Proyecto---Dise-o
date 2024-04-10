// RandomFood.jsx
import React from 'react';
import { Text, View, Image } from 'react-native';
import Header from './Header';

const RandomFood = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>Hola</Text>
    </View>
  );
};

export default RandomFood;
