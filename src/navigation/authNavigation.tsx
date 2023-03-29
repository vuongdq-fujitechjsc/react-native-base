import LoginContainer from 'src/sceens/login/loginContainer';
import RegisterContainer from 'src/sceens/register/registerContainer';
import { RouteContants } from 'src/constants/routeContant';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthNavigationStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={RouteContants.LOGIN} component={LoginContainer} />
            <Stack.Screen name={RouteContants.REGISTER} component={RegisterContainer} />
        </Stack.Navigator>
    )
}

export default AuthNavigationStack;