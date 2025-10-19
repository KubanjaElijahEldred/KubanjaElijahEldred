// app/auth/signup.tsx
import { useState, useContext } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "expo-router";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = useContext(AuthContext);
  const router = useRouter();

  if (!auth) throw new Error("AuthContext is missing!");

  const handleSignup = async () => {
    try {
      await auth.signup(email, password); // Call signup from AuthContext
      router.replace("/main"); // Navigate to main screen
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError("Signup failed"); // Friendly error message
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
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
}
