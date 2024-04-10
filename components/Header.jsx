
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

const MenuIcon = require('../assets/ImagesApp/menu.png');
const CenterIcon = require('../assets/ImagesApp/Logo.png');
const RightIcon = require('../assets/ImagesApp/Search.png');

const Header = ({ navigation }) => {
  const handleLeftPress = () => {
    // Acción cuando se presiona el icono del menú
    navigation.toggleDrawer(); // Ejemplo de abrir un drawer
  };

  const handleRightPress = () => {
    // Acción cuando se presiona el icono del lado derecho
    // Aquí puedes agregar el manejo de abrir la página de búsqueda u otra acción
  };

  return (
    <View style={styles.appBar}>
      <TouchableOpacity style={styles.iconContainer} onPress={handleLeftPress}>
        <Image source={MenuIcon} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Image source={CenterIcon} style={styles.titleIcon} />
      </View>
      <TouchableOpacity style={styles.iconContainer} onPress={handleRightPress}>
        <Image source={RightIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  appBar: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#A6C30D',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop:40,
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
};

export default Header;
