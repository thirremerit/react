import React from "react";
import { View, Text, StyleSheet } from "react-native";


const MainScreen2 = () => {
    return (
        <View style={styles}>
            <Text style={styles.text}>Hello from Main Screen 2</Text>
        </View>
    );
}
const styles = StyleSheet.create({

container:{
    flex: 1,
    backgroundColor: '#c44545ff',
    alignItems: 'center',
    
},

    text: {
        fontSize: 20,
    },
})

export default MainScreen2;