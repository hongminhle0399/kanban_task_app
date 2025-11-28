'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegistrationFormValues, schema } from './RegistrationForm.schema'
import { Button } from '@/shared/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { Card, CardContent, CardTitle, CardHeader, CardDescription } from '@/shared/ui/card'
import { toast } from 'sonner'
import { authApi } from '../../services/auth-api'
import { useRouter } from 'next/navigation'

export default function RegistrationForm() {
    const router = useRouter()
    const form = useForm<RegistrationFormValues>({
        resolver: yupResolver(schema),
        mode: 'onBlur',
        defaultValues: {
            confirmPassword: '',
            name: '',
            email: '',
            password: '',
        }
    })

    const { handleSubmit, control, formState: { isSubmitting } } = form

    const onSubmit = async (values: RegistrationFormValues) => {
        try {
            await authApi.register(values)
            toast.success('Registration successful!')
            router.push('/login')
        } catch (error) {
            toast.error('Registration failed!')
        }
    }

    return (
        <Card className="w-full max-w-md shadow-xl border-2">
            <CardHeader className="space-y-1 text-center">
                <div className="mx-auto bg-linear-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg w-fit mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                </div>
                <CardTitle className="text-3xl">Create an account</CardTitle>
                <CardDescription>Sign up to get started with your Kanban board</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Peter Parker' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input autoComplete='email' placeholder='you@example.com' type="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input autoComplete='off' placeholder="••••••••" type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input autoComplete='off' placeholder="••••••••" type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Register"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
