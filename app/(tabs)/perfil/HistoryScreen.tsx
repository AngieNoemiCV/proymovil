
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const history = [
  { id: '1', challenge: 'Desafío 1', score: 80 },
  { id: '2', challenge: 'Desafío 2', score: 90 },
  { id: '3', challenge: 'Desafío 3', score: 85 },
];

export default function History() {
  return (
    <View style={styles.container}>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text style={styles.challenge}>{item.challenge}</Text>
            <Text style={styles.score}>Puntaje: {item.score}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E0F7FA', 
  },
  banner: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  historyItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#ffebcd', 
    borderRadius: 10,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  challenge: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff6347', 
  },
  score: {
    fontSize: 16,
    color: '#4682b4', 
  },
});
