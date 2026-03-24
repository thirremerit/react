import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { places } from "../data/places";
import { styles } from "../styles";

export default function PlacesScreen({ route, navigation }) {
  const { category } = route.params || {};
  const [search, setSearch] = useState("");

  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  const filteredPlaces = useMemo(() => {
    const base = category
      ? places.filter((p) => p.category === category)
      : places;

    if (!search) return base;

    const lower = search.toLowerCase();

    return base.filter(
      (p) =>
        p.title.toLowerCase().includes(lower) ||
        p.description.toLowerCase().includes(lower) ||
        p.location?.toLowerCase().includes(lower)
    );
  }, [category, search]);

  const renderPlace = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate("Details", { place: item })}
    >
      <Image source={{ uri: item.image }} style={styles.listItemImage} />

      <View style={styles.listItemBody}>
        <Text style={styles.listItemTitle}>{item.title}</Text>

        <Text style={styles.listItemSub} numberOfLines={2}>
          {item.description}
        </Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animated.View style={{ flex: 1, opacity }}>
        {/* Back Button */}
        <View style={styles.backButton}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={22} color="#FFF" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>

        {/* Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            {category || "All places"}
          </Text>
          <Text style={styles.sectionAction}>
            {filteredPlaces.length} items
          </Text>
        </View>

        {/* Search Bar */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.12)",
            borderRadius: 16,
            paddingHorizontal: 14,
            paddingVertical: 10,
            marginBottom: 18,
          }}
        >
          <Ionicons
            name="search"
            size={18}
            color="rgba(255,255,255,0.72)"
          />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search places"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={{
              flex: 1,
              marginLeft: 10,
              color: "#FFF",
              fontSize: 15,
            }}
          />
        </View>

        {/* List */}
        <FlatList
          style={{ flex: 1, width: "100%" }}
          data={filteredPlaces}
          keyExtractor={(item) => item.id}
          renderItem={renderPlace}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 80,
            alignItems: "center",
          }}
        />
      </Animated.View>
    </SafeAreaView>
  );
}
