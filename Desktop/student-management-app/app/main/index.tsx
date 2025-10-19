// app/main/index.tsx
import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function MainScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Welcome to Main!</Text>

      <Button
        title="Go to Home"
        onPress={() => router.push("/home/index")}
      />

      <Button
        title="Logout"
        onPress={() => router.replace("/auth/login")}
      />
    </View>
  );
}
