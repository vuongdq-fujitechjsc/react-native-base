import DrawerComponent from "src/sceens/drawer/drawerComponent";
import HomeContainer from "src/sceens/home/homeContainer";
import { RouteContants } from "src/constants/routeContant";
import SettingContainer from "src/sceens/setting/settingContainer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeTabNavigationStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={RouteContants.HOME} component={HomeContainer} />
        </Stack.Navigator>
    )
}

const SettingTabNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={RouteContants.SETTING} component={SettingContainer} />
        </Stack.Navigator>
    )
}

const MainNavigationStack = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerComponent {...props} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Drawer Navigation" component={DemoBottomStack} />
        </Drawer.Navigator>
    )
}

const DemoBottomStack = () => {
    return (
        <Tab.Navigator initialRouteName={RouteContants.TABBAR_HOME} screenOptions={{ headerShown: false }}>
            <Tab.Screen name={RouteContants.TABBAR_HOME} component={HomeTabNavigationStack} />
            <Tab.Screen name={RouteContants.TABBAR_SETTING} component={SettingTabNavigation} />
        </Tab.Navigator>
    )
}

export default MainNavigationStack;