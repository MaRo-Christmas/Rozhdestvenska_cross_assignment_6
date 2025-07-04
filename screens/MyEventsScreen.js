import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "@/redux/favoritesSlice";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";

export default function MyEventsScreen() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const { themeColors } = useContext(ThemeContext);

  return (
    <View
      style={[styles.container, { backgroundColor: themeColors.background }]}
    >
      <Text style={[styles.title, { color: themeColors.text }]}>My Events</Text>

      {favorites.length === 0 ? (
        <Text style={[styles.emptyText, { color: themeColors.text }]}>
          You have no favorite events yet.
        </Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={[styles.item, { backgroundColor: themeColors.card }]}>
              <View style={styles.itemInfo}>
                <Text style={[styles.itemTitle, { color: themeColors.text }]}>
                  {item.title.length > 15
                    ? `${item.title.slice(0, 15)}...`
                    : item.title}
                </Text>
                <Text style={[styles.itemDate, { color: themeColors.text }]}>
                  {item.date}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => dispatch(removeFavorite(item.title))}
              >
                <Ionicons
                  name="trash-outline"
                  size={24}
                  color={themeColors.icon}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  emptyText: { fontSize: 16 },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 12,
  },
  itemInfo: { flex: 1, marginRight: 8 },
  itemTitle: { fontSize: 16, fontWeight: "bold" },
  itemDate: { fontSize: 14 },
});
