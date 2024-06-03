import { SerrarSesion } from "@/utils/login";
import { useRouter } from "expo-router";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { List } from "react-native-paper";

const Perfil = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <List.Item
        title="Notificaciones"
        titleStyle={styles.title}
        left={(props) => <Icon type="font-awesome" name="bell" color="#FFD700" />}
        onPress={() => {
          router.push("/perfil/NotificationsScreen");
        }}
        style={styles.item}
      />
      <List.Item
        title="Historial de Soluciones"
        titleStyle={styles.title}
        left={(props) => <Icon type="font-awesome" name="history" color="#1E90FF" />}
        onPress={() => {
          router.push("/perfil/HistoryScreen");
        }}
        style={styles.item}
      />
      <List.Item
        title="Ayuda y Soporte"
        titleStyle={styles.title}
        left={(props) => <Icon type="font-awesome" name="question-circle" color="#32CD32" />}
        onPress={() => {
          router.push("/perfil/HelpScreen");
        }}
        style={styles.item}
      />
      <List.Item
        title="Cerrar Sesión"
        titleStyle={styles.title}
        left={(props) => <Icon type="font-awesome" name="sign-out" color="#FF6347" />}
        onPress={() => {
          SerrarSesion();
          router.replace("/login");
        }}
        style={styles.item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E0F7FA",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
});

export default Perfil;
