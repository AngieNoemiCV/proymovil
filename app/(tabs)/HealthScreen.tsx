// screens/StatsScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const top3Players = [
  { id: '1', name: 'Juan', score: 98.8, photo: require('@/assets/Juan.png') },
  { id: '2', name: 'Ana', score: 97.3, photo: require('@/assets/Ana.png') },
  { id: '3', name: 'Luis', score: 97, photo: require('@/assets/Luis.png') },
];

const otherPlayers = [
  { id: '4', name: 'Carlos', score: 95.8 },
  { id: '5', name: 'Marta', score: 95 },
  { id: '6', name: 'Sofia', score: 92 },
  { id: '7', name: 'Carlos', score: 88 },
  { id: '8', name: 'Angel', score: 85.6 },
  { id: '9', name: 'Karen', score: 80.2 },
  { id: '10', name: 'Guadalupe', score: 77 },
  { id: '11', name: 'Carmen', score: 75 },
  { id: '12', name: 'Pedro', score: 70.8 },
  { id: '13', name: 'Manuel', score: 70.2 },
  { id: '14', name: 'Karina', score: 70 },
  { id: '15', name: 'Rocio', score: 68 },
  { id: '16', name: 'Gabriel', score: 65 },
  // Añade más jugadores si es necesario
];

export default function HealthScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estadisticas Top 3</Text>
      <View style={styles.top3Container}>
        {top3Players.map((player) => (
          <View key={player.id} style={styles.playerCard}>
            <Image source={player.photo} style={styles.playerPhoto} />
            <Text style={styles.playerName}>{player.name}</Text>
            <Text style={styles.playerScore}>{player.score}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.title}>Otros Competidores</Text>
      <FlatList
        data={otherPlayers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.name}</Text>
            <Text style={styles.tableCell}>{item.score}</Text>
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
    backgroundColor: '#E0F7FA', // Color de fondo más cálido
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#FF6347', // Color de título vibrante
  },
  top3Container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  playerCard: {
    alignItems: 'center',
    backgroundColor: '#FFFACD', // Fondo amarillo suave
    padding: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  playerPhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#FF6347', // Borde del avatar color vibrante
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4682B4', // Color azul vibrante
  },
  playerScore: {
    fontSize: 16,
    color: '#32CD32', // Color verde vibrante
  },
  table: {
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FFD700', // Color dorado suave
    backgroundColor: '#FFF8DC', // Fondo beige suave
    borderRadius: 10,
    marginBottom: 5,
  },
  tableCell: {
    fontSize: 16,
    color: '#8A2BE2', // Color púrpura vibrante
  },
  button: {
    backgroundColor: '#FF69B4', // Color rosa brillante
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', // Texto blanco para contraste
  },
});
