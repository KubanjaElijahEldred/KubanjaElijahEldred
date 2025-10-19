// app/auth/login.tsx
import { useState, useContext } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = useContext(AuthContext);
  const router = useRouter();

  if (!auth) throw new Error("AuthContext is missing!");

  const handleLogin = async () => {
    try {
      await auth.login(email, password);
      // ✅ FIX: Correct route
      router.replace("/home/index");
    } catch (err) {
      console.error(err);
      setError("Invalid credentials");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 10 }}
      />
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
