import AuthNavigationStack from "./authNavigation";
import LoginContainer from "src/sceens/login/loginContainer";
import MainNavigationStack from "./mainNavigation";
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
            {isLoggedIn && <MainNavigationStack />}
        </NavigationContainer>
    )
}

export default RootNavigationStack;