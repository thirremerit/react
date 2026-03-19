import React from "react";
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFavorites } from "../FavoritesContext";
import { styles } from "../styles";

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useFavorites();

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
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.backButton}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={22} color="#FFF" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Favorites</Text>
        <Text style={styles.sectionAction}>{favorites.length} saved</Text>
      </View>

      {favorites.length === 0 ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
          <Text style={styles.detailsHeader}>No favorites yet</Text>
          <Text style={styles.detailsText}>Tap “Save to favorites” on a place to add it here.</Text>
        </View>
      ) : (
        <FlatList
          style={{ flex: 1, width: "100%" }}
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={renderPlace}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80, alignItems: "center" }}
        />
      )}
    </SafeAreaView>
  );
}
