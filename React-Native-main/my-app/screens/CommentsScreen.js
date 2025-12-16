import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function CommentsScreen() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comments</Text>

      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.commentCard,
              index % 2 === 0 ? styles.cardEven : styles.cardOdd,
            ]}
          >
            <Text style={styles.commentEmail}>{item.email}</Text>
            <Text style={styles.commentBody}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
}

// 🎨 Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: "#e6f0ff", // light blue background
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#003366", // dark blue
  },
  commentCard: {
    padding: 15,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  cardEven: {
    backgroundColor: "#ffffff", // white card
  },
  cardOdd: {
    backgroundColor: "#f0f8ff", // very light blue card
  },
  commentEmail: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 14,
    color: "#0073e6",
  },
  commentBody: {
    fontSize: 15,
    color: "#333",
    lineHeight: 20,
  },
});
