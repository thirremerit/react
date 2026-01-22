import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>GO BACK</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.drawerButton]}
        onPress={() => navigation.openDrawer()}
      >
        <Text style={styles.buttonText}>OPEN DRAWER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
  drawerButton: {
    backgroundColor: "#34C759",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default About;
