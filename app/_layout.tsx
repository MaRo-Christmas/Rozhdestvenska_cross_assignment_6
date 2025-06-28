import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="explore" options={{ title: "Explore" }} />
      <Stack.Screen name="event-details" options={{ title: "Event Details" }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
    </Stack>
  );
}
