import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface EventCardProps {
  imageUrl: string;
  title: string;
  date: string;
  onPress: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  imageUrl,
  title,
  date,
  onPress,
}) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Buy tickets</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    width: 200,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 4,
  },
  date: {
    color: "#666",
    marginBottom: 8,
  },
  button: {
    borderWidth: 1,
    borderColor: "#F45B69",
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#F45B69",
    fontWeight: "bold",
  },
});
