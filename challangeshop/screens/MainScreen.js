import { useEffect } from "react";
import { View, Text } from "react-native";

export default function MainScreen({ navigation }) {
  useEffect(() => {
    navigation.navigate("Products");
  }, []);

  return (
    <View>
      <Text>Opening products...</Text>
    </View>
  );
}
