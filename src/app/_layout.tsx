import { Stack } from "expo-router";

export default function RootLayout() {
  return ( 
  <Stack>
    <Stack.Screen
      name="index"
      options={{ title: "Tela Dado de RPG" }}
    />
    <Stack.Screen
      name="dado"
      options={{ title: "Dado" }}
    />
  </Stack>
  );
}
