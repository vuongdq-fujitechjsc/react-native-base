import { Controller, useForm } from "react-hook-form";
import { DatePickerIOS, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import RegisterFormData, { registerValidatorSchema } from "src/validator/registerValidator";

import { GenderObject } from "src/models/objects/genderObject";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RadioButton from "src/common/components/RadioButton";
import { useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';

const RegisterComponent = ({ onRegister }: { onRegister: Function }) => {

    const [isMale, setIsMale] = useState<GenderObject[]>([
        { id: 1, value: true, name: 'Male', selected: true },
        { id: 2, value: false, name: 'Female', selected: false }
    ])

    const [chosenDate, setChosenDate] = useState(new Date())

    const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
        defaultValues: {
            name: '',
            phone: 0,
            gender: '',
            dateOfBirth: '',
            email: '',
            password: ''
        },
        resolver: yupResolver(registerValidatorSchema)
    })

    const _onRadioButtonClick = (item: { id: any; value?: boolean; name?: string; selected?: boolean; }) => {
        let updatedState = isMale.map(
            (isMaleItem) => isMaleItem.id === item.id
                ? { ...isMaleItem, selected: true }
                : { ...isMaleItem, selected: false }
        )
        setIsMale(updatedState)
    }

    const _onSubmitRegister = (data: any) => {
        onRegister(data)
    }

    // console.log('Error: ', control)

    return (
        <KeyboardAwareScrollView>
            <View style={_styles.wrapper}>
                <View style={_styles.inputTextWrapper}>
                    <Controller
                        control={control}
                        name='name'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={_styles.textInput}
                                placeholder="Name"
                                keyboardType="default"
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )}
                    />
                    {errors.name && <Text style={_styles.errorText}>{errors.name.message}</Text>}
                </View>
                <View style={_styles.inputTextWrapper}>
                    <Controller
                        control={control}
                        name='phone'
                        rules={{
                            required: true
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={_styles.textInput}
                                placeholder="Phone number"
                                keyboardType="phone-pad"
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value.toString()}
                                defaultValue='asd'
                            />
                        )}
                    />
                    {errors.phone && <Text style={_styles.errorText}>{errors.phone.message}</Text>}
                </View>
                <View style={_styles.inputTextWrapper}>
                    <Controller
                        control={control}
                        name='gender'
                        render={({ field: { onChange } }) => (
                            <View>
                                {
                                    isMale.map((item) => (
                                        <RadioButton
                                            onPress={() => {
                                                _onRadioButtonClick(item)
                                                onChange(item.name)
                                            }}
                                            selected={item.selected}
                                            key={item.id}
                                        >
                                            {item.name}
                                        </RadioButton>
                                    ))
                                }
                            </View>
                        )}
                    />
                </View>
                <View style={_styles.datePickerWrapper}>
                    <Controller
                        control={control}
                        name='dateOfBirth'
                        render={({ field: { onChange } }) => (
                            <DatePickerIOS
                                date={chosenDate}
                                onDateChange={(item) => (
                                    setChosenDate(item),
                                    onChange(item.toString())
                                )}
                            />
                        )}
                    />
                </View>
                <View style={_styles.inputTextWrapper}>
                    <Controller
                        control={control}
                        name='email'
                        rules={{
                            required: true
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={_styles.textInput}
                                placeholder="Email"
                                keyboardType="email-address"
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )}
                    />
                    {errors.email && <Text style={_styles.errorText}>{errors.email.message}</Text>}
                </View>
                <View style={_styles.inputTextWrapper}>
                    <Controller
                        control={control}
                        name='password'
                        rules={{
                            required: true
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={_styles.textInput}
                                placeholder="Password"
                                keyboardType="default"
                                secureTextEntry
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )}
                    />
                    {errors.password && <Text style={_styles.errorText}>{errors.password.message}</Text>}
                </View>
                <TouchableOpacity style={_styles.btn} onPress={handleSubmit(_onSubmitRegister)}>
                    <Text>Push to Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}

const _styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#d2d2d2',
        width: '100%',
        marginTop: 20,
    },
    datePickerWrapper: {
        height: 150,
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    inputTextWrapper: {
        height: 60,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
    },
    textInput: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingLeft: 20,
    },
    errorText: {
        color: 'red',
        fontSize: 10
    },
    btn: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#3EBA77',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 50,
    }
})

export default RegisterComponent;

