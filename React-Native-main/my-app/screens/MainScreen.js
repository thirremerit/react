import { useEffect } from "react";
import { View, Text } from "react-native";

export default function MainScreen({ navigation }) {
  useEffect(() => {
    navigation.replace("Comments");
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Opening comments...</Text>
    </View>
  );
}


