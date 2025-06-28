import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  icon?: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  icon,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {icon}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F45B69",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
