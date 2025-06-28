import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AuthInput } from "@/components/AuthInput/AuthInput";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <AuthInput placeholder="Email" value={email} onChangeText={setEmail} />
      <AuthInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <PrimaryButton title="Login" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
});
