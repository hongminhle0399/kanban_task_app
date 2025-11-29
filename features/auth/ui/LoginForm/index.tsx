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

    return <Card className="w-full max-w-md border-1">
        <CardHeader className="space-y-2 gap-x-2 gap-y-0 text-center">
            <CardTitle className="text-2xl font-normal tracking-tight">Welcome back</CardTitle>
            <CardDescription>Sign in to your account to continue</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={control}
                        name='email'
                        render={({ field }) => {
                            return <FormItem>
                                <FormLabel className="font-normal">Email</FormLabel>
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
                                <FormLabel className="font-normal">Password</FormLabel>
                                <FormControl>
                                    <Input autoComplete="current-password" {...field} type="password" placeholder="••••••••" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        }}
                    />
                    <Button type="submit" className="w-full shadow-md">
                        Sign In
                    </Button>
                    <div className="text-center">
                        <Link href='/register' className="cursor-pointer text-sm text-center text-blue-600 hover:underline hover:text-blue-700" >Don't have an account? Sign up</Link>
                    </div>
                </form>
            </Form>
        </CardContent>
    </Card >

}