import AuthNavigationStack from "./authNavigation";
import LoginContainer from "src/sceens/login/loginContainer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { selectIsLoggedIn } from "src/reducers/authReducer";
import { useAppSelector } from "src/store/hook";

const RootStack = createNativeStackNavigator();

const RootNavigationStack = () => {

    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    return (
        <NavigationContainer>
            {!isLoggedIn && <AuthNavigationStack />}
            {/* <RootStack.Navigator>
                <RootStack.Screen name='A' component={LoginContainer} />
            </RootStack.Navigator>  */}
        </NavigationContainer>
    )
}

export default RootNavigationStack;