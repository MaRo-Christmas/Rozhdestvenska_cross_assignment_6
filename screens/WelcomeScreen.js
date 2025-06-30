import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://placehold.co/600x400" }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Find your moment in our space</Text>
        <Text style={styles.subtitle}>
          An app that opens the door to events in our cultural space. Discover,
          register, and stay connected.
        </Text>
      </View>
      <PrimaryButton title="GO" onPress={() => navigation.navigate("Drawer")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 24,
    paddingTop: 60,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 16,
  },
  textContainer: {
    marginVertical: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});
