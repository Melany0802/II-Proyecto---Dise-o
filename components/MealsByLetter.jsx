
import React from 'react';
import { Text, View, Image } from 'react-native';
import Header from './Header';
import Sidebar from './Sidebar';

const MealsByLetter = ({ navigation, showSidebar }) => {
  return (
    <View>
       {showSidebar && <Sidebar navigation={navigation} />} 
      <Text>Meals By Letter</Text>
    </View>
  );
};

export default MealsByLetter;
