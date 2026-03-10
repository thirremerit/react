import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { categories } from "../data/places";
import { styles } from "../styles";

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore Pristina</Text>
      <Text style={styles.subtitle}>Discover the best places in Kosovo's capital</Text>
      <View style={styles.categoryContainer}>
        {categories.map((item) => (
          <TouchableOpacity key={item.id} style={styles.categoryButton} onPress={() => navigation.navigate("Places", { category: item.name })}>
            <Ionicons name={item.icon} size={20} color="#334155" style={{ marginRight: 8 }} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Places")}>
        <Text style={styles.buttonText}>See All Places</Text>
      </TouchableOpacity>
    </View>
  );
}