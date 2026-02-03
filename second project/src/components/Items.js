import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";


const Item = ({ item }) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: item.image }} style={styles.img} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.desc}>{item.description}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#FFF",
        flexDirection: "row",
        borderRadius: 8,
        marginBottom: 18,
        padding: 1
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 8
    },
    texytContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    category: {
        color: "#888",
    },
    desc: {
        fontSize: 14,
        marginVertical: 6,
    },
    price: {
        backgroundColor: "#00BCD4",
        color: "#FFF",
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        borderRadius: 12,
    },

}); 
            