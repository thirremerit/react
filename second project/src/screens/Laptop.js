import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Item from "../components/Item";
import data from "../data/data.json";

const Laptop = () => {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    // Fetch laptop data
    setLaptops(data.laptops);
  }, []);

  return (
    <FlatList
      data={laptops}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Item item={item} />}
      contentContainerStyle={styles.container}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No laptops available</Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 400,
  },
  emptyText: {
    color: "#999",
    fontSize: 16,
  },
});

export default Laptop;
