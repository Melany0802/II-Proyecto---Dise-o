
import React from 'react';
import { Text, View, Image } from 'react-native';
import Header from './Header';

const MealsByLetter = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>Meals By Letter</Text>
    </View>
  );
};

export default MealsByLetter;
