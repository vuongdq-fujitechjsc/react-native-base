import { InferType, boolean, number, object, string } from 'yup';

export const registerValidatorSchema = object({
    name: string()
        .required('Name should be required please'),
    phone: number()
        .required('Phone should be required please')
        .typeError('Phone must be number'),
    gender: string()
        .optional(),
    dateOfBirth: string()
        .optional(),
    email: string()
        .email('Please enter valid email')
        .required('Email Address should be required please'),
    password: string()
        .required('Password should be required please')
        .min(4, 'Password must be at least 4 character long')
        .max(8, 'Password must be at max 8 character long')
})

type RegisterFormData = InferType<typeof registerValidatorSchema>

export default RegisterFormData;