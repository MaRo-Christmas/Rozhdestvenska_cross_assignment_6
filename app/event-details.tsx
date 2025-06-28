import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { router } from "expo-router";

export default function EventDetailsScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://placehold.co/600x300" }}
        style={styles.image}
      />
      <Text style={styles.title}>Event Title</Text>
      <Text style={styles.description}>
        This is the detailed description of the event. You can join or find more
        information here.
      </Text>
      <PrimaryButton title="+ JOIN NOW" onPress={() => router.push("/login")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
  },
});
