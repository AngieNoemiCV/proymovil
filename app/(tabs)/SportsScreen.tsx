// screens/TrophiesScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const trophies = [
  {
    level: 1,
    topics: [
      { topic: 'Tema 1', trophy: require('@/assets/Insignia.png') },
      { topic: 'Tema 2', trophy: require('@/assets/Insignia.png') },
      { topic: 'Tema 3', trophy: require('@/assets/Trofeo.png') },
      { topic: 'Tema 4', trophy: require('@/assets/Insignia.png') },
      { topic: 'Tema 5', trophy: require('@/assets/Insignia.png') },
    ],
  },
  {
    level: 2,
    topics: [
      { topic: 'Tema 1', trophy: require('@/assets/Insignia.png') },
      { topic: 'Tema 2', trophy: require('@/assets/Trofeo.png') },
      { topic: 'Tema 3', trophy: require('@/assets/Trofeo.png') },
      { topic: 'Tema 4', trophy: require('@/assets/Insignia.png') },
      { topic: 'Tema 5', trophy: require('@/assets/Trofeo.png') },
    ],
  },
  // Añadir más niveles con sus respectivos trofeos y temas
];

export default function TrophiesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trofeos Ganados</Text>
      <FlatList
        data={trophies}
        keyExtractor={(item) => item.level.toString()}
        renderItem={({ item }) => (
          <View style={styles.levelContainer}>
            <Text style={styles.levelTitle}>Nivel {item.level}</Text>
            <View style={styles.trophiesRow}>
              {item.topics.map((topic, index) => (
                <View key={index} style={styles.trophyContainer}>
                  <Image source={topic.trophy} style={styles.trophyImage} />
                  <Text style={styles.topicName}>{topic.topic}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
        style={styles.table}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E0F7FA", // Fondo cálido y brillante
  },
  title: {
    fontSize: 28, // Tamaño de fuente más grande
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#FF6347", // Color de título brillante y alegre
  },
  table: {
    marginTop: 10,
  },
  levelContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 15, // Bordes más redondeados
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  levelTitle: {
    fontSize: 22, // Tamaño de fuente más grande
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FF4500", // Color vibrante
    textAlign: "center", // Centramos el texto
  },
  trophiesRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  trophyContainer: {
    alignItems: "center",
  },
  trophyImage: {
    width: 60, // Tamaño de trofeo más grande
    height: 60,
    marginBottom: 5,
  },
  topicName: {
    fontSize: 16, // Tamaño de fuente más grande
    textAlign: "center",
    color: "#333",
  },
});
