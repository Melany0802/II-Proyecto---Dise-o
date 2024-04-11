
import React from 'react';
import { Text, View, Image } from 'react-native';
import Header from './Header';

const MealsById = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>Meals By ID</Text>
    </View>
  );
};

export default MealsById;
