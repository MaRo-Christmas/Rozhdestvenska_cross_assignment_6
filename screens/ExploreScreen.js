import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { CategoryBadge } from "@/components/CategoryBadge/CategoryBadge";
import { EventCard } from "@/components/EventCard/EventCard";
import { EventListItem } from "@/components/EventListItem/EventListItem";

export default function ExploreScreen({ navigation }) {
  const categories = [
    "All Events",
    "Concerts",
    "Technology",
    "Lectures",
    "Tours",
  ];
  const events = [
    {
      id: "1",
      imageUrl: "https://placehold.co/200x150",
      title: "Book presentation",
      date: "May 27 at 18:30",
    },
    {
      id: "2",
      imageUrl: "https://placehold.co/200x150",
      title: "Panel discussion",
      date: "May 27 at 19:30",
    },
  ];
  const allEvents = [
    {
      id: "3",
      imageUrl: "https://placehold.co/60x60",
      title: "Live Music",
      date: "May 29 at 18:30",
    },
    {
      id: "4",
      imageUrl: "https://placehold.co/60x60",
      title: "Movie Screening",
      date: "June 4 at 19:30",
    },
    {
      id: "5",
      imageUrl: "https://placehold.co/60x60",
      title: "Speaking Club",
      date: "June 23 at 18:30",
    },
  ];

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
      <FlatList
        horizontal
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventCard
            imageUrl={item.imageUrl}
            title={item.title}
            date={item.date}
            onPress={() => navigation.navigate("EventDetails", { event: item })}
          />
        )}
        contentContainerStyle={{ paddingVertical: 8 }}
      />

      <Text style={styles.sectionTitle}>All events</Text>
      {allEvents.map((event) => (
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
});
