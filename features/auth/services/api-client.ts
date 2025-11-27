import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { useAuthStore } from '../store/authStore'
import { authApi } from './auth-api'
import { AccessTokenResponse } from '../types/auth.types'

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL })

api.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    const { accessToken } = useAuthStore.getState()
    if (accessToken) {
        config.headers = config.headers ?? {}
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
})


type RetryableRequestConfig = InternalAxiosRequestConfig & {
    _retry?: boolean;
};

api.interceptors.response.use((response: AxiosResponse) => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as RetryableRequestConfig
        if (error.response?.status === 401 && !originalRequest?._retry) {
            originalRequest._retry = true
            const newAccessToken = await refreshToken()
            if (newAccessToken) {
                useAuthStore.getState().setAccessToken(newAccessToken)
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
                return api(originalRequest)
            }

        }
    }
)

export const refreshToken = async (): Promise<string> => {
    const response = await api.post<AccessTokenResponse>('/auth/refresh')
    return response.data.accessToken
}

export default api