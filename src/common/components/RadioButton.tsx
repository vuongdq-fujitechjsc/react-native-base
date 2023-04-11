import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RadioButton = ({ onPress, selected, children }) => {
    return (
        <View style={_styles.radioButtonContainer}>
            <TouchableOpacity style={_styles.radioButton} onPress={onPress}>
                {selected ? <View style={_styles.radioButtonIcon} /> : null}
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
                <Text style={_styles.radioButtonText}>{children}</Text>
            </TouchableOpacity>
        </View>
    )
}

const _styles = StyleSheet.create({
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 5
    },
    radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center"
    },
    radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: '#98cfb6'
    },
    radioButtonText: {
        fontSize: 16,
        marginLeft: 16
    }
})

export default RadioButton;