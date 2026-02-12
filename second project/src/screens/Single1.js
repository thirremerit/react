import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

const Single1 = ({ navigation, route }) =>{
const { item } = route.params;

return(
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={{uri: item.image}} 
            style={styles.image}
            resizeMode="cover"
            />
        </View>
        <View style={styles.cardHolder}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}onPress={() => navigation.goBack()}>Go Back</Text>
        </TouchableOpacity>
     </ScrollView>
);
}
export default Single1;

const styles = StyleSheet.create({
container: {
    padding: 20,
backgroundColor: "#fff",
flexGrow: 1,
},
imageContainer: {
    borderRadius: 10,
overflow: "hidden",
},
image: {
width: "100%",
height: 300
},
cardHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
alignItems: "center",
marginTop: 20,
},
name: {
fontSize: 18,
fontWeight: "bold",
color: "#333"
},
price: {
fontSize: 16,
fontWeight: "bold",
color: "#007BFF"
},
description: {
fontSize: 16,
fontWeight: "bold",
color: "#007BFF"
},
btn: {
    marginTop: 20,
backgroundColor: "#007BFF",
padding: 15,
borderRadius: 10,
alignItems: "center"
},
btnText: {
color: "#fff",
fontWeight: "bold"
},

})
