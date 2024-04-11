// En Header.jsx

import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const MenuIcon = require('../assets/ImagesApp/menu.png');
const CenterIcon = require('../assets/ImagesApp/Logo.png');
const RightIcon = require('../assets/ImagesApp/Search.png');

const Header = ({ toggleSidebar }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={toggleSidebar}>
        <Image source={MenuIcon} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Image source={CenterIcon} style={styles.titleIcon} />
      </View>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Search')}>
        <Image source={RightIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#A6C30D',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 40,
  },
  iconContainer: {
    padding: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleIcon: {
    width: 40,
    height: 40,
  },
});

export default Header;
