
import React from 'react';
import { Text, View, Image } from 'react-native';
import Header from './Header';

const MealsByCountry = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>Meals By Country</Text>
    </View>
  );
};

export default MealsByCountry;
