import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"

import { authActions } from "src/reducers/authReducer";
import { useAppDispatch } from "src/store/hook";

const DrawerComponent = (props: any) => {

    const dispatch = useAppDispatch();

    const onLogout = () => {
        dispatch(authActions.logout('Tap logout'))
    }

    return (
        <DrawerContentScrollView>
            <DrawerItem label="Logout" onPress={onLogout} />
        </DrawerContentScrollView>
    )
}

export default DrawerComponent;