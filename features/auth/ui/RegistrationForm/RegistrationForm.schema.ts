import * as yup from 'yup'

export type RegistrationFormValues = {
    // name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const schema: yup.ObjectSchema<RegistrationFormValues> = yup.object({
    // name: yup
    //     .string()
    //     .required('Name is required'),
    email: yup
        .string()
        .email('Please enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), ''], 'Passwords must match')
        .required('Confirm password is required'),
})
