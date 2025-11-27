import api from './api-client'
import { AccessTokenResponse, AuthResponse, LoginRequest, RegisterRequest } from "../types/auth.types";

export const authApi = {
    login: async (credentials: LoginRequest): Promise<AuthResponse> => {
        const response = await api.post<AuthResponse>('/login', credentials)
        return response.data
    },
    register: async (userData: RegisterRequest): Promise<AuthResponse> => {
        const response = await api.post<AuthResponse>('/register', userData)
        return response.data
    },
    logout: async (): Promise<void> => {
        await api.post('/auth/logout')
    }
}