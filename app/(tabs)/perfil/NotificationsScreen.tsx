import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TechScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        ¡Todavía no hay ninguna notificación!
      </Text>
    </View>
  );
};

export default TechScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0F7FA', // Color de fondo más claro
    padding: 20,
  },
  imagen: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  texto: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    color: '#ff4500', // Color de texto llamativo
    fontFamily: 'Comic Sans MS', // Fuente amigable
  },
});
