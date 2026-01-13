import React from "react";
import { Text, StyleSheet, View, FlatList,Button, TouchableOpacity } from "react-native";

const students = [
  { name: "Eden", surname: "Rocha", age: "17" },
  { name: "Kaylen", surname: "Tyler", age: "15" },
  { name: "Ellie", surname: "Mcclure", age: "17" },
  { name: "Journey", surname: "Blackburn", age: "16" },
];

const ListScreen = () => {
  let count=0;
  return (
    <View>
      <Button
       title="press me"
      onPress={()=>console.log('Button has been clicked')} > </Button>
      <Text style={styles.textStyle}>List of Students</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Text style={styles.textStyle}>
            {item.name} {item.surname} — Age {item.age}
          </Text>
        )}
        
      />

      <TouchableOpacity>
        style={styles.touchableBtn}
        onPress={()=>console.log('Touchable Opacity has been clicked', count++)}




      <Text style={styles.btnStyle}>This is touchable opacity</Text>
      </TouchableOpacity>
    </View>
    
      
      
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    marginVertical: 5,
  },
  btnStyle: {
    fontSize: 25,
    color: "blue",
    textAlign: "center",
    fontWeight: "bold",
  },
  touchableBtn: {
    backgroundColor: "#dddddd",
    marginVertical: 10,
    paddingVertical: 20,
    borderRadius: 6,
    marginHorizontal: 20,
  },
});

export default ListScreen;
