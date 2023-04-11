import { Text, View } from "react-native"

import RegisterComponent from "./registerComponent";

const RegisterContainer = ({ route, navigation }: { route: any, navigation: any }) => {
    console.log(route)
    console.log(navigation)

    const { dataToChildrent } = route.params;

    const _onRegisterAccount = (data) => {
        console.log('Register account below information: ', data);
    }

    return (
        <View>
            <Text>{dataToChildrent}</Text>
            <RegisterComponent onRegister={_onRegisterAccount}/>
        </View>
    )
}

export default RegisterContainer;