import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import { useAuth } from "../AuthContext";

export default function SignUpScreen({ navigation }) {
  const { signUp, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    const success = signUp(email, password);
    if (success) {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24 }}>
        <Text style={styles.heroText}>Create an account</Text>
        <Text style={[styles.heroSub, { marginBottom: 20 }]}>Save favorites and leave reviews.</Text>

        {error ? (
          <Text style={{ color: "#FF6B6B", marginBottom: 12, textAlign: "center" }}>{error}</Text>
        ) : null}

        <TextInput
          placeholder="Email"
          placeholderTextColor="rgba(248,250,252,0.6)"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={{
            width: "100%",
            maxWidth: 360,
            backgroundColor: "rgba(255,255,255,0.08)",
            borderRadius: 14,
            padding: 14,
            color: "#F8FAFC",
            marginBottom: 12,
          }}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(248,250,252,0.6)"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{
            width: "100%",
            maxWidth: 360,
            backgroundColor: "rgba(255,255,255,0.08)",
            borderRadius: 14,
            padding: 14,
            color: "#F8FAFC",
            marginBottom: 16,
          }}
        />

        <TouchableOpacity style={styles.primaryButton} onPress={handleSignUp}>
          <Text style={styles.primaryButtonText}>Create account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 18 }}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.sectionAction}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
