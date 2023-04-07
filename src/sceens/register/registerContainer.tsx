import { NavigationProp, useNavigation } from "@react-navigation/native"
import { StyleSheet, Text, View } from "react-native"

const RegisterContainer = ({ route, navigation} : { route: any, navigation: any}) => {
    console.log(route)
    console.log(navigation)

    const { dataToChildrent } = route.params;

    return (
        <View style={styles.wrapper}>
            <Text>{dataToChildrent}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#d2d2d2',
        justifyContent: 'center',
    },
})

export default RegisterContainer;