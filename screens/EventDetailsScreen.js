import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/favoritesSlice"; // <-- Додай оце!
import { ThemeContext } from "../context/ThemeContext";

export default function EventDetailsScreen({ route }) {
  const { event } = route.params;
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const { themeColors } = useContext(ThemeContext);

  const handleAddToFavorites = () => {
    dispatch(addFavorite(event));
    setIsFavorite(true);
    Alert.alert(
      "Added to Favorites",
      `"${event.title}" has been added to your favorites.`
    );
  };

  return (
    <View
      style={[styles.container, { backgroundColor: themeColors.background }]}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: event.imageUrl }} style={styles.image} />
        <TouchableOpacity
          style={[styles.heartButton, { backgroundColor: themeColors.card }]}
          onPress={handleAddToFavorites}
        >
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={28}
            color={isFavorite ? "#EF5656" : themeColors.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={[styles.title, { color: themeColors.text }]}>
          {event.title.length > 40
            ? `${event.title.slice(0, 40)}...`
            : event.title}
        </Text>
        <Text style={[styles.subtitle, { color: themeColors.text }]}>
          Free entry
        </Text>
        <Text style={[styles.description, { color: themeColors.text }]}>
          Join us for an inspiring evening dedicated to the ideas and
          experiences of Radoslaw Sikorski. Discover his latest book, explore
          the intersections of diplomacy, politics, and personal reflection, and
          take part in a live conversation about Europe's future in a changing
          world. Free entry with prior registration. Limited seats available.
        </Text>

        <TouchableOpacity
          style={[styles.joinButton, { backgroundColor: "#EF5656" }]}
        >
          <Text style={styles.joinButtonText}>+ JOIN NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  imageContainer: { position: "relative" },
  image: { width: "100%", height: 300 },
  heartButton: {
    position: "absolute",
    top: 16,
    right: 16,
    borderRadius: 20,
    padding: 6,
  },
  content: { padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 8 },
  subtitle: { fontSize: 16, marginBottom: 16 },
  description: { fontSize: 14, marginBottom: 24 },
  joinButton: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  joinButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
