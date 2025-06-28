import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

interface SocialButtonProps {
  icon: React.ReactNode;
  onPress: () => void;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
});
