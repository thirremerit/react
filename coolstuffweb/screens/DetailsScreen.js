import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles";

export default function DetailsScreen({ route, navigation }) {
  const { place } = route.params || {};

  if (!place) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Text style={styles.detailsHeader}>No place details available</Text>
          <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.goBack()}>
            <Text style={styles.primaryButtonText}>Go back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ position: "relative" }}>
          <Image source={{ uri: place.image }} style={styles.detailsImage} />
          <View style={styles.heroOverlay} />
          <TouchableOpacity
            style={[styles.backButton, { position: "absolute", top: 18, left: 18 }]}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.detailsContent}>
          <Text style={styles.detailsHeader}>{place.title}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{place.category}</Text>
          </View>

          <Text style={styles.detailsText}>{place.description}</Text>

          {place.location ? (
            <>
              <Text style={styles.detailsLabel}>Location</Text>
              <Text style={styles.detailsText}>{place.location}</Text>
            </>
          ) : null}

          {place.rating ? (
            <>
              <Text style={styles.detailsLabel}>Rating</Text>
              <Text style={styles.detailsText}>{place.rating} / 5</Text>
            </>
          ) : null}

          <View style={styles.thinDivider} />

          <TouchableOpacity style={styles.primaryButton} onPress={() => {}}>
            <Text style={styles.primaryButtonText}>Save to favorites</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
