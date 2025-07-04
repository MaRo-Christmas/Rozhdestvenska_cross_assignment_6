import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";

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
  const { themeColors } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={[styles.itemContainer, { backgroundColor: themeColors.card }]}
      onPress={onPress}
    >
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={[styles.title, { color: themeColors.text }]}>
          {title.length > 40 ? `${title.slice(0, 40)}...` : title}
        </Text>
        <Text style={[styles.date, { color: themeColors.text }]}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
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
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
  },
});
