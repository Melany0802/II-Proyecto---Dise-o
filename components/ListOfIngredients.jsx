import React from 'react';
import { Text, View, Image } from 'react-native';
import Header from './Header';
import Sidebar from './Sidebar';

const ListOfIngredients = ({ navigation, showSidebar }) => {
  return (
    <View>
              {showSidebar && <Sidebar navigation={navigation} />} 

      <Text>List of ingredients</Text>
    </View>
  );
};

export default ListOfIngredients;
