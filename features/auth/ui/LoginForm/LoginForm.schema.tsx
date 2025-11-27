import * as yup from 'yup'

export type LoginFormValue = {
    email: string
    password: string
}

export const schema: yup.ObjectSchema<LoginFormValue> = yup.object({
    email: yup
        .string()
        .email('Please enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required')
})