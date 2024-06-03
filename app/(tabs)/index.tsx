// App.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function Business() {
  const handleLevelPress = (level) => {
    Alert.alert(`Nivel ${level}`, `Has seleccionado el Nivel ${level}`);
    //lógica para navegar al nivel seleccionado
  };

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/Img.jpg')} style={styles.logo} />
      <View style={styles.buttonContainer}>
        {[1, 2, 3, 4, 5, 6].map((level) => (
          <TouchableOpacity
            key={level}
            style={styles.button}
            onPress={() => handleLevelPress(level)}
          >
            <Text style={styles.buttonText}>Nivel {level}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    margin: 10,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

