import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface EventListItemProps {
  imageUrl: string;
  title: string;
  date: string;
  onPress: () => void;
}

export const EventListItem: React.FC<EventListItemProps> = ({
  imageUrl,
  title,
  date,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  date: {
    color: "#666",
  },
});
