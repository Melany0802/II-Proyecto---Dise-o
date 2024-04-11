import React from 'react';
import { Text, View, Image } from 'react-native';
import Header from './Header';
import Sidebar from './Sidebar';

const ListFoodCategories = ({ navigation, showSidebar }) => {
  return (
    <View>
              {showSidebar && <Sidebar navigation={navigation} />} 

      <Text>List Food categories</Text>
    </View>
  );
};

export default ListFoodCategories;
