import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles";

export default function DetailsScreen({ route, navigation }) {
  const { place } = route.params;

  if (!place) {
    return (
      <View style={{ flex: 1, backgroundColor: '#F8FAFC', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>No place details available</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#0F172A" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F8FAFC' }}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#0F172A" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Image source={{ uri: place.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.categoryLabel}>Category: {place.category}</Text>
        <Text style={styles.description}>{place.description}</Text>
      </View>
    </ScrollView>
  );
}