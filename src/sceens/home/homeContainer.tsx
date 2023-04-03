import { StyleSheet, View } from "react-native"

const HomeContainer = () => {
    return (
        <View style={styles.wrapper}></View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#d2d2d2',
        justifyContent: 'center',
    },
})

export default HomeContainer;