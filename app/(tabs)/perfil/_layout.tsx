import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="NotificationsScreen" />
      <Stack.Screen name="HistoryScreen" />
      <Stack.Screen name="HelpScreen" />
    </Stack>
  );
};

export default _layout;
