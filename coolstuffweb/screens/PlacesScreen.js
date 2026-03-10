import React from "react";
import { SafeAreaView, FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { places } from "../data/places";
import { styles } from "../styles";

export default function PlacesScreen({ route, navigation }) {
  const { category } = route.params || {};
  const filteredPlaces = category ? places.filter(p => p.category === category) : places;

  const renderPlace = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Details", { place: item })}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text numberOfLines={3} style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F0F9FF' }}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#0F172A" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.screenHeader}>{category || "All Places"}</Text>
      <FlatList
        data={filteredPlaces}
        keyExtractor={item => item.id}
        renderItem={renderPlace}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaView>
  );
}