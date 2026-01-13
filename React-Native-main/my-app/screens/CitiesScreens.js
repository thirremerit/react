import React from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";
import data from "../data/cities.json";

class CitiesScreens extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]
    };
}

componentDidMount() {
    this.setState({cities: data }); 
}
renderitem = ({ item }) => {
    const { name,countryCode,population, description } = item;
    return (
        <View style={styles.cardWrapper}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>Country Code: {countryCode}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.small}>Population: {population}</Text>
        </View>
    );
};

render() {
    return(
        <View>
        <Text style={styles.screenTitle}>Cities</Text>

        <FlatList
            data={this.state.cities}
            keyExtractor={(item,index)=>
                item.id ? item.id.toString():index.toString()
            }
            renderItem={this.renderItem}
        ></FlatList>
    </View>
    );

    
}

}



export default CitiesScreens;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 16,
    },
    screenTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 12,
        textAlign: "center",
    },
    cardWrapper: {
        backgroundColor: "#f8f8f8",
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 14,
        marginTop: 4,
        color: "#555",
    },
    description: {
        fontSize: 13,
        marginTop: 6,
        color: "#777",
    },
    small: {
        fontSize: 12,
        color: "#999",
        marginTop: 6,
    },
});