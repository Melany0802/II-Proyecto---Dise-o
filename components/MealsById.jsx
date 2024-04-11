
import React from 'react';
import { Text, View, Image } from 'react-native';
import Header from './Header';
import Sidebar from './Sidebar';

const MealsById = ({ navigation, showSidebar }) => {
  return (
    <View>
              {showSidebar && <Sidebar navigation={navigation} />} 

      <Text>Meals By ID</Text>
    </View>
  );
};

export default MealsById;
