
import React from 'react';
import { Text, View, Image } from 'react-native';
import Header from './Header';
import Sidebar from './Sidebar';

const MealsByCountry = ({ navigation, showSidebar }) => {
  return (
    <View>
              {showSidebar && <Sidebar navigation={navigation} />} 

      <Text>Meals By Country</Text>
    </View>
  );
};

export default MealsByCountry;
