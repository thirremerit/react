import React, { Component } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import products from "../data/products.json";
import Product from "../components/Product";

export default class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({ products: products });
  }

  renderItem = ({ item }) => (
    <Product
      name={item.name}
      category={item.category}
      price={item.price}
      stock={item.stock}
      image={item.image}
      description={item.description}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
