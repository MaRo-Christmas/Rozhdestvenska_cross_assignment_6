import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { CategoryBadge } from "@/components/CategoryBadge/CategoryBadge";
import { EventCard } from "@/components/EventCard/EventCard";
import { EventListItem } from "@/components/EventListItem/EventListItem";
import { fetchEvents } from "../api/api";

export default function ExploreScreen({ navigation }) {
  const categories = [
    "All Events",
    "Concerts",
    "Technology",
    "Lectures",
    "Tours",
  ];
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents()
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setError("Failed to load events");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#EF5656" />
        <Text style={styles.loaderText}>Loading events...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar placeholder="Search events" onChangeText={() => {}} />

      <View style={styles.categories}>
        {categories.map((category, index) => (
          <CategoryBadge
            key={index}
            title={category}
            isActive={index === 0}
            onPress={() => {}}
          />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Upcoming events</Text>
      <View style={styles.flatListWrapper}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={events.slice(0, 5)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <EventCard
              imageUrl={item.imageUrl}
              title={item.title}
              date={item.date}
              onPress={() =>
                navigation.navigate("EventDetails", { event: item })
              }
            />
          )}
          contentContainerStyle={styles.flatListContainer}
          style={{ flexGrow: 0 }}
        />
      </View>
      <Text style={styles.sectionTitle}>All events</Text>
      {events.slice(5, 15).map((event) => (
        <EventListItem
          key={event.id}
          imageUrl={event.imageUrl}
          title={event.title}
          date={event.date}
          onPress={() => navigation.navigate("EventDetails", { event })}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  categories: {
    flexDirection: "row",
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loaderText: {
    marginTop: 12,
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  flatListContainer: {
    paddingVertical: 8,
    paddingLeft: 16,
  },
  flatListWrapper: {
    minHeight: 250,
  },
});
