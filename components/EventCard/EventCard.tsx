import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favoritesSlice";

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
  const { themeColors } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.favorites);
  const isFavorite = favorites.some((fav: any) => fav.title === title);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(title));
    } else {
      dispatch(addFavorite({ imageUrl, title, date }));
    }
  };

  return (
    <View style={[styles.card, { backgroundColor: themeColors.card }]}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text
        style={[styles.title, { color: themeColors.text }]}
        numberOfLines={2}
      >
        {title}
      </Text>
      <Text style={[styles.date, { color: themeColors.text }]}>{date}</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Buy tickets</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleFavorite}>
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={24}
            color={themeColors.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
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
    marginBottom: 8,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
