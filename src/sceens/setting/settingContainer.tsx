import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useCallback, useState } from "react"

const SettingContainer = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Parent component</Text>
            <ParentComponent />
        </View>
    )
}

const ParentComponent = () => {

    const [text, setText] = useState('Old data')

    const callbackFunc = (childrenData:string) => {
        setText(childrenData)
    }

    return (
        <>
            <ChildComponent dataFromParent={'Parents to Children'} callbackFunc={callbackFunc} />
            <Text>Receive data from childrent: {text}</Text>
        </>
    )
}

const ChildComponent = ({ dataFromParent, callbackFunc }: { dataFromParent: string, callbackFunc: Function }) => {
    return (
        <>
            <Text>Receive data from parent: {dataFromParent}</Text>
            <TouchableOpacity onPress={() => {
                callbackFunc('Data from childrent')
            }}>
                <Text>Pass data to childrent</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#d2d2d2',
        justifyContent: 'center',
    },
})

export default SettingContainer;