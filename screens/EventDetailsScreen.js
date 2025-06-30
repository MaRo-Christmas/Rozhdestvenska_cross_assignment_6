import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";

export default function EventDetailsScreen({ route, navigation }) {
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: event.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.description}>{event.date}</Text>
      <PrimaryButton
        title="+ JOIN NOW"
        onPress={() => navigation.navigate("Login")}
      />
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
