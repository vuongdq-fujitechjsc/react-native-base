import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useAppDispatch } from 'src/store/hook';

// import { useNavigation } from "@react-navigation/native"

const LoginContainer = () => {
    // const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const onLogin = () => {

    };

    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.textInput}
                placeholder="Enter your email"
            // onChangeText={username => setInfo({...info, username})}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
            // onChangeText={password => setInfo({...info, password})}
            />
            <TouchableOpacity style={styles.btn} onPress={onLogin}>
                <Text style={styles.btnTitle}> SIGN IN </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate(RouteContants.REGISTER)}> */}
            <TouchableOpacity style={styles.btn}>
                <Text>Push to Register</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#3EBA77',
        justifyContent: 'center',
    },

    textInput: {
        height: 50,
        backgroundColor: '#fff',
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
        borderRadius: 5,
        paddingLeft: 20,
    },
    btn: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
    },

    btnTitle: {
        color: '#fff',
    }
})

export default LoginContainer;