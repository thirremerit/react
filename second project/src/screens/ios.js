import React from "react";
import { View,Text,StyleSheet,FlatList,ScrollView,TouchableOpacity } from "react-native-web";
import data from "../data/data.json";
import Item from "../components/Item";

class Ios extends React.Component{
    constructor(){
        super();
        this.state = {products:[], 
        };
    }

    componentDidMount(){
        this.setState({
            products:data.ios,
        });
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.desc}>dummy text blablabla random words banana random word yayayay</Text>
                    <View style={styles.productsContainer}>
                    <FlatList
                        data={this.state.products}
                        renderItem={({item}) => <Item item={item} />}
                        keyExtractor={item => item.id}
                    />
                    </View>
                </View>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>View more</Text>
                </TouchableOpacity>

            </ScrollView>
        );
    }
}
export default Ios;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    desc: {
        fontSize: 14,
        marginBottom: 15,
    },
    productsContainer: {
        marginBottom: 20,
    },
    btn: {
        backgroundColor: "#007bff",
        padding: 12,
        alignItems: "center",
        borderRadius: 8,
    },
    btnText: {
        color: "#fff",
        fontSize: 16,
    },
});
