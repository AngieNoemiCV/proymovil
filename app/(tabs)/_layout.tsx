import { Tabs, useRouter } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Icon } from "react-native-elements";
import { useFocusEffect } from "@react-navigation/native";
import { ObtenerSesion } from "@/utils/login";

export default function TabLayout() {

  const router = useRouter();
  useFocusEffect(() => {
    ObtenerSesion().then((user) => {
      if (!user) {
        router.replace("/login");
      }
    });
  });

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: (props) => (
            <Icon type="entypo" name="home" color={props.color} />
          ),
        }}
      />
      <Tabs.Screen
        name="HealthScreen"
        options={{
          title: "Estadisticas",
          tabBarIcon: (props) => (
            <Icon type="materialicons" name="bar-chart" color={props.color} />
          ),
        }}
      />

      <Tabs.Screen
        name="SportsScreen"
        options={{
          title: "Trofeos",
          tabBarIcon: (props) => (
            <Icon type="entypo" name="trophy" color={props.color} />
          ),
        }}
      />

      <Tabs.Screen
        name="TechScreen"
        options={{
          title: "Asesorias",
          tabBarIcon: (props) => (
            <Icon type="entypo" name="mail" color={props.color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Foro"
        options={{
          title: "Foro",
          tabBarIcon: (props) => (
            <Icon type="materialicons" name="forum" color={props.color} />
          ),
        }}
      />

      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: (props) => (
            <Icon type="Ionicins" name="people" color={props.color} />
          ),
        }}
      />
    </Tabs>
  );
}
