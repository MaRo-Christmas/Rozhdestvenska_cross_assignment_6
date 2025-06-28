import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface CategoryBadgeProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  title,
  isActive,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.badge, isActive && styles.activeBadge]}
      onPress={onPress}
    >
      <Text style={[styles.badgeText, isActive && styles.activeBadgeText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 8,
  },
  activeBadge: {
    backgroundColor: "#F45B69",
  },
  badgeText: {
    color: "#333",
  },
  activeBadgeText: {
    color: "white",
  },
});
