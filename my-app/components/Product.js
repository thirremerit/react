import { View, Text, Image, StyleSheet } from "react-native";

export default function Product(props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: props.image }} style={styles.image} />

      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.category}>{props.category}</Text>
      <Text>{props.description}</Text>

      <View style={styles.row}>
        <Text style={styles.price}>${props.price}</Text>
        <Text>Stock: {props.stock}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  category: {
    color: "blue",
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    fontWeight: "bold",
  },
});
