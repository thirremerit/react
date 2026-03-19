import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles, colors } from "../styles";
import { useAuth } from "../AuthContext";
import { useFavorites } from "../FavoritesContext";
import { useReviews } from "../ReviewsContext";

export default function DetailsScreen({ route, navigation }) {
  const { place } = route.params || {};
  const { user } = useAuth();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { getReviewsForPlace, getAverageRating, addReview } = useReviews();
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const reviews = useMemo(() => getReviewsForPlace(place?.id), [getReviewsForPlace, place?.id]);
  const { average: averageRating, count: ratingCount } = useMemo(
    () => (place ? getAverageRating(place.id) : { average: 0, count: 0 }),
    [getAverageRating, place?.id]
  );

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

  const favorite = isFavorite(place.id);
  const buttonLabel = favorite ? "Remove from favorites" : "Save to favorites";

  const handleAddReview = () => {
    if (!rating) return;
    addReview(place.id, reviewText, rating, user?.email);
    setReviewText("");
    setRating(0);
  };

  const renderReview = ({ item }) => (
    <View style={{ marginBottom: 14, width: "100%", maxWidth: 360 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 6 }}>
        {[1, 2, 3, 4, 5].map((value) => (
          <Ionicons
            key={value}
            name={value <= item.rating ? "star" : "star-outline"}
            size={16}
            color={value <= item.rating ? colors.accent : colors.textSecondary}
            style={{ marginRight: 2 }}
          />
        ))}
        <Text style={{ marginLeft: 8, color: colors.textSecondary, fontSize: 12 }}>
          {item.author ? `by ${item.author} • ` : ""}
          {new Date(item.createdAt).toLocaleString()}
        </Text>
      </View>
      <Text style={styles.detailsText}>{item.text}</Text>
    </View>
  );

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

          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, marginBottom: 12 }}>
            {[1, 2, 3, 4, 5].map((value) => (
              <TouchableOpacity
                key={value}
                onPress={() => setRating(value)}
                style={{ marginRight: 6 }}
              >
                <Ionicons
                  name={value <= rating ? "star" : "star-outline"}
                  size={20}
                  color={value <= rating ? colors.accent : colors.textSecondary}
                />
              </TouchableOpacity>
            ))}
            <Text style={{ color: colors.textSecondary, fontSize: 12 }}>
              {ratingCount > 0 ? `${averageRating.toFixed(1)} (${ratingCount})` : "No ratings yet"}
            </Text>
          </View>

          <Text style={styles.detailsText}>{place.description}</Text>

          {place.location ? (
            <>
              <Text style={styles.detailsLabel}>Location</Text>
              <Text style={styles.detailsText}>{place.location}</Text>
            </>
          ) : null}

          <View style={styles.thinDivider} />

          <TouchableOpacity style={styles.primaryButton} onPress={() => toggleFavorite(place)}>
            <Text style={styles.primaryButtonText}>{buttonLabel}</Text>
          </TouchableOpacity>

          <View style={{ marginTop: 20, width: "100%", maxWidth: 360 }}>
            <Text style={styles.detailsLabel}>Add a review</Text>
            <TextInput
              value={reviewText}
              onChangeText={setReviewText}
              placeholder="Write your review here..."
              placeholderTextColor="rgba(248,250,252,0.55)"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                borderRadius: 14,
                padding: 12,
                color: colors.textPrimary,
                marginBottom: 10,
                minHeight: 80,
                textAlignVertical: "top",
              }}
              multiline
            />
            <TouchableOpacity
              style={[styles.primaryButton, { backgroundColor: colors.accent }]}
              onPress={handleAddReview}
            >
              <Text style={styles.primaryButtonText}>Submit review</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 24, width: "100%", maxWidth: 360 }}>
            <Text style={styles.sectionTitle}>Reviews</Text>
            {reviews.length === 0 ? (
              <Text style={styles.detailsText}>No reviews yet. Be the first to leave one!</Text>
            ) : (
              <FlatList
                data={reviews}
                keyExtractor={(item) => item.id}
                renderItem={renderReview}
                scrollEnabled={false}
                contentContainerStyle={{ paddingTop: 10 }}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
