import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Avatar, Title, Card, Snackbar } from "react-native-paper";
import { useRouter } from "expo-router";
import { GuardarSesion } from "@/utils/login";
import { supabase } from "@/utils/supabase";

const RegisterScreen = () => {
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

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const registrar = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const { data, error } = await supabase
      .from("usuario")
      .insert([
        {
          nombre: name,
          apellidos: "---",
          correo: email,
          password: password,
          cumpleanos: "0001-01-01T00:00:00Z",
          imagen: "https://avatars.githubusercontent.com/u/34776956?v=4",
        },
      ])
      .select("nombre")
      .single();

    if (!error) {
      await GuardarSesion(data.nombre);
      router.replace("/");
    }else{
      ShowMensaje(error.message);

    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Registrar</Title>
      <Avatar.Icon size={100} icon="account" style={styles.avatar} />

      <Card>
        <Card.Content>
          <TextInput
            label="Nombre"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />
          <TextInput
            label="Correo"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            keyboardType="email-address"
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
          <Button
            mode="contained"
            onPress={() => registrar()}
            style={styles.button}
          >
            Siguiente
          </Button>
        </Card.Content>
      </Card>

      <Snackbar visible={showmensaje} onDismiss={() => {}}>
        {mensaje}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#8fcbbc",
  },
  title: {
    alignSelf: "center",
    marginBottom: 20,
    fontSize: 24,
  },
  avatar: {
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default RegisterScreen;
