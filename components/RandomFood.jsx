// RandomFood.jsx
import React from 'react';
import { Text, View, Image } from 'react-native';
import Header from './Header';
import Sidebar from './Sidebar';

const RandomFood = ({ navigation, showSidebar }) => {
  return (
    <View>
        {showSidebar && <Sidebar navigation={navigation} />} 
      <Text>Hola</Text>
    </View>
  );
};

export default RandomFood;
