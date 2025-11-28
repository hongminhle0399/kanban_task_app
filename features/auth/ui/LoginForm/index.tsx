'use client'

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Link from "next/link";

import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { LoginFormValue, schema } from "./LoginForm.schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/ui/form";
import { authApi } from "../../services/auth-api";
import { useAuthStore } from "../../store/authStore";
import { useRouter } from "next/navigation";

export function LoginForm() {
    const { setAccessToken } = useAuthStore()
    const router = useRouter()
    const form = useForm<LoginFormValue>({
        resolver: yupResolver(schema),
        mode: 'onBlur',
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const { handleSubmit, control } = form

    const onSubmit = async (credentails: LoginFormValue) => {
        try {
            const response = await authApi.login(credentails)
            setAccessToken(response.accessToken)
            toast.success('Login successful!')
            router.replace('/dashboard')
        } catch (error) {
            console.log(error)
            toast.error('Login failed')
        }
    }

    return <Card className="w-full max-w-md shadow-xl border-2">
        <CardHeader className="space-y-1 text-center">
            <div className="mx-auto bg-linear-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg w-fit mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            </div>
            <CardTitle className="text-3xl">Welcome back</CardTitle>
            <CardDescription>Sign in to your account to continue</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={control}
                        name='email'
                        render={({ field }) => {
                            return <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input autoComplete="email" {...field} placeholder="your@example.com" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        }}
                    />
                    <FormField
                        control={control}
                        name="password"
                        render={({ field }) => {
                            return <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input autoComplete="current-password" {...field} type="password" placeholder="••••••••" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        }}
                    />
                    <Button type="submit" className="w-full bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md">
                        Sign In
                    </Button>
                    <div className="text-center">
                        <Link href='/register' className="cursor-pointer text-sm text-center text-blue-600 hover:underline hover:text-blue-700" >Don't have an account? Sign up</Link>
                    </div>
                </form>
            </Form>
        </CardContent>
    </Card>

}