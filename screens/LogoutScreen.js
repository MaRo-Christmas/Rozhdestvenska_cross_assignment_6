import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LogoutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You have been logged out</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
