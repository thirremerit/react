import React from "react";
import { View, Text,} from "react-native";
import { FlatList } from "react-native-web";

const studentnames = [

{name :'erit' , surname: 'govori', age: 14},
    {name :'bob' , surname: 'squar', age: 14},
    {name :'erit' , surname: 'govori', age: 14}
]





const ListScreen = () => {


    return (
        <View>
            <Text style={styles.textstyle}> List od students</Text>
            <FlatList data={studentnames}
            keyExtractor={(item)=item.name}
            renderItem ={({item})=>{
              <Text style={styles.textStyle}>{item.name} - {item.surname} - age of the pearson: {item.age         } </Text>
            }}
            >

            </FlatList>
        </View>
    );

}


const styles = StyleSheet.create (
    {
        textStyle: {
            fontSize: 18,
            marginVertical: 5,
        },
    }

)

export default ListScreen;