import React from 'react';
import { Text, View, Image } from 'react-native';
import Header from './Header';
import Sidebar from './Sidebar';

const ListOfCountries = ({ navigation, showSidebar }) => {
  return (
    <View>
              {showSidebar && <Sidebar navigation={navigation} />} 

      <Text>List of countries</Text>
    </View>
  );
};

export default ListOfCountries;

