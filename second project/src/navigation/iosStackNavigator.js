import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ios from "../screens/ios";
const Stack = createStackNavigator();



const IosStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Ios"
                component={Ios}
                options={
                    {
                        headerStyle :{
                            backgroundColor: "#f4511e"
 },
                        headerTintColor: "#fff",
                        }
                }
            />
        </Stack.Navigator>
    );
}

export default IosStackNavigator;