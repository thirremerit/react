import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { categories, places } from "../data/places";
import { styles, colors } from "../styles";
import { useAuth } from "../AuthContext";

const featuredPlaces = places.slice(0, 4);

export default function HomeScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  

  const handleCategoryPress = (category) => {
    setSelectedCategory(category ?? "All");
    navigation.navigate("Places", { category });
  };

  const handleViewAll = () => navigation.navigate("Places");

  const renderFeatured = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate("Details", { place: item })}
    >
      <Image source={{ uri: item.image }} style={styles.listItemImage} />
      <View style={styles.listItemBody}>
        <Text style={styles.listItemTitle}>{item.title}</Text>
        <Text numberOfLines={2} style={styles.listItemSub}>
          {item.description}
        </Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const { user, signOut } = useAuth();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}> 
      <Animated.ScrollView
        style={{ opacity }}
        contentContainerStyle={[
          styles.scrollContent,
          { backgroundColor: colors.background, paddingBottom: 90 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            width: "100%",
            maxWidth: 360,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 14,
          }}
        >
          <Text style={{ color: colors.textSecondary }}>Hi, {user?.email}</Text>
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.sectionAction}>Sign out</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.hero}>
          <Image
            source={{ uri: "https://picsum.photos/900/600?grayscale" }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay} />
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 22 }}>
            <Text style={styles.heroText}>Discover Pristina</Text>
            <Text style={styles.heroSub}>
              Find curated experiences, top landmarks, and cultural hotspots in Kosovo’s capital.
            </Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity onPress={handleViewAll}>
            <Text style={styles.sectionAction}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.chipContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[
              styles.chipList,
              { justifyContent: "center", flexGrow: 1, paddingHorizontal: 10 },
            ]}
          >
            <TouchableOpacity
              style={[styles.chip, selectedCategory === "All" && styles.chipActive]}
              onPress={() => handleCategoryPress(null)}
            >
              <Ionicons
                name="grid-outline"
                size={16}
                color="rgba(255,255,255,0.92)"
                style={{ marginRight: 8 }}
              />
              <Text style={styles.chipText}>All</Text>
            </TouchableOpacity>

            {categories.map((item) => {
              const selected = selectedCategory === item.name;
              return (
                <TouchableOpacity
                  key={item.id}
                  style={[styles.chip, selected && styles.chipActive]}
                  onPress={() => handleCategoryPress(item.name)}
                >
                  <Ionicons
                    name={item.icon}
                    size={16}
                    color="rgba(255,255,255,0.92)"
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles.chipText}>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured places</Text>
          <TouchableOpacity onPress={handleViewAll}>
            <Text style={styles.sectionAction}>View all</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={featuredPlaces}
          keyExtractor={(item) => item.id}
          renderItem={renderFeatured}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 20,
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        />

        <TouchableOpacity style={styles.primaryButton} onPress={handleViewAll}>
          <Text style={styles.primaryButtonText}>Browse all places</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.primaryButton, { backgroundColor: colors.accent, marginTop: 12 }]}
          onPress={() => navigation.navigate("Favorites")}
        >
          <Text style={styles.primaryButtonText}>View favorites</Text>
        </TouchableOpacity>
      </Animated.ScrollView>
    <safeAreaView>
  );
  
}
