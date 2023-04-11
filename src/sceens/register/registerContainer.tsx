import { StyleSheet, Text, View } from "react-native";

import RegisterComponent from "./registerComponent";

const RegisterContainer = ({ route, navigation }: { route: any, navigation: any }) => {
    console.log(route)
    console.log(navigation)

    const { dataToChildrent } = route.params;

    const _onRegisterAccount = (data) => {
        console.log('Register account below information: ', data);
    }

    return (
        <View style={_styles.wrapper}>
            <Text>{dataToChildrent}</Text>
            <RegisterComponent onRegister={_onRegisterAccount} />
        </View>
    )
}

const _styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#d2d2d2',
        width: '100%'
    }
})

export default RegisterContainer;