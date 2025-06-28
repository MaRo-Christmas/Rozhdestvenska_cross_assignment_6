import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface EventDetailsProps {
  imageUrl: string;
  title: string;
  description: string;
  onJoin: () => void;
}

export const EventDetails: React.FC<EventDetailsProps> = ({
  imageUrl,
  title,
  description,
  onJoin,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity style={styles.button} onPress={onJoin}>
        <Text style={styles.buttonText}>+ JOIN NOW</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#F45B69",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
