import HomeContainer from "src/sceens/home/homeContainer";
import { RouteContants } from "src/constants/routeContant";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MainNavigationStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={RouteContants.HOME} component={HomeContainer} />
        </Stack.Navigator>
    )
}

export default MainNavigationStack;