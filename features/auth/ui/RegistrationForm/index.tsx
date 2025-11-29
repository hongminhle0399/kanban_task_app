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
import Link from 'next/link'

export default function RegistrationForm() {
    const router = useRouter()
    const form = useForm<RegistrationFormValues>({
        resolver: yupResolver(schema),
        mode: 'onBlur',
        defaultValues: {
            confirmPassword: '',
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
        <Card className="w-full max-w-md border-1">
            <CardHeader className="space-y-2 gap-y-0 gap-x-2 text-center">
                <CardTitle className="text-2xl font-normal text-center tracking-tight">Create an account</CardTitle>
                <CardDescription className="text-center">Join TaskFlow and start managing your tasks efficiently</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='font-normal'>Email</FormLabel>
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
                                    <FormLabel className='font-normal'>Password</FormLabel>
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
                                    <FormLabel className='font-normal'>Confirm Password</FormLabel>
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

                        <div className="text-center text-sm">
                            <span className="text-muted-foreground">Already have an account? </span>
                            <Link
                                href="./login"
                                className="text-primary hover:underline font-normal"
                            >
                                Sign in
                            </Link>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
