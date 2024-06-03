// screens/LoginScreen.js
import React, { useState } from "react";
import { Tabs, useFocusEffect, useRouter } from "expo-router";

import { View, StyleSheet } from "react-native";
import { Text, TextInput, Button, Snackbar, Card } from "react-native-paper";
import { supabase } from "@/utils/supabase";
import { GuardarSesion } from "@/utils/login";

export default function LoginScreen() {
  const router = useRouter();

  const [mensaje, setMensaje] = useState("");
  const [showmensaje, setShowmensaje] = useState(false);

  const ShowMensaje = (mensaje: string) => {
    setShowmensaje(false);
    setMensaje(mensaje);
    setShowmensaje(true);
    setTimeout(() => {
      setShowmensaje(false);
    }, 3000);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Maneja el inicio de sesión aquí
    console.log("Login:", { username, password });

    const { data, error } = await supabase
      .from("usuario")
      .select("nombre")
      .eq("correo", username)
      .eq("password", password)
      .single();

    if (!error) {
      console.log(data);

      await GuardarSesion(data.nombre);
      router.replace("/");
    } else {
      ShowMensaje(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Card>
        <Card.Content>
          <TextInput
            label="Correo"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={styles.input}
          />
          <TextInput
            label="contraseña"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={styles.input}
          />
          <Button mode="contained" onPress={handleLogin} style={styles.button}>
            Login
          </Button>
          <Button
            onPress={() => router.push("/login/crear")}
            style={styles.button}
          >
            Soy nuevo
          </Button>
        </Card.Content>
      </Card>

      <Snackbar visible={showmensaje} onDismiss={() => {}}>
        {mensaje}
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#8fcbbc",
    color: "#ffffff",

    fontWeight: "600",
  },
  title: {
    fontSize: 46,
    marginBottom: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
    backgroundColor: "",
  },
  button: {
    marginTop: 16,
  },
});
