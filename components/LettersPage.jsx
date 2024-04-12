// LettersPage.jsx

import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Sidebar from './Sidebar';

const alphabetImages = {
  a: require('../assets/ImagesLetters/letter-a.png'),
  b: require('../assets/ImagesLetters/letter-b.png'),
  c: require('../assets/ImagesLetters/letter-c.png'),
  d: require('../assets/ImagesLetters/letter-d.png'),
  e: require('../assets/ImagesLetters/letter-e.png'),
  f: require('../assets/ImagesLetters/letter-f.png'),
  g: require('../assets/ImagesLetters/letter-g.png'),
  h: require('../assets/ImagesLetters/letter-h.png'),
  i: require('../assets/ImagesLetters/letter-i.png'),
  j: require('../assets/ImagesLetters/letter-j.png'),
  k: require('../assets/ImagesLetters/letter-k.png'),
  l: require('../assets/ImagesLetters/letter-l.png'),
  m: require('../assets/ImagesLetters/letter-m.png'),
  n: require('../assets/ImagesLetters/letter-n.png'),
  o: require('../assets/ImagesLetters/letter-o.png'),
  p: require('../assets/ImagesLetters/letter-p.png'),
  q: require('../assets/ImagesLetters/letter-q.png'),
  r: require('../assets/ImagesLetters/letter-r.png'),
  s: require('../assets/ImagesLetters/letter-s.png'),
  t: require('../assets/ImagesLetters/letter-t.png'),
  u: require('../assets/ImagesLetters/letter-u.png'),
  v: require('../assets/ImagesLetters/letter-v.png'),
  w: require('../assets/ImagesLetters/letter-w.png'),
  x: require('../assets/ImagesLetters/letter-x.png'),
  y: require('../assets/ImagesLetters/letter-y.png'),
  z: require('../assets/ImagesLetters/letter-z.png')
};

const LettersPage = ({ navigation, showSidebar }) => {
  const handleLetterPress = (letter) => {
    navigation.navigate('MealsByLetter', { letter }); // Pasar la letra seleccionada como parámetro
  };

  return (
    <View>
      {showSidebar && <Sidebar navigation={navigation} />}
      <View style={styles.container}>
        {Object.entries(alphabetImages).map(([letter, image]) => (
          <TouchableOpacity key={letter} style={styles.imageButton} onPress={() => handleLetterPress(letter)}>
            <Image source={image} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  imageButton: {
    width: '15%',
    aspectRatio: 1,
    margin: 15,
    borderWidth: 0,
    borderColor: '#DDDDDD',
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default LettersPage;
