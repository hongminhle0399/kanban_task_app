export interface LoginRequest {
    email: string
    password: string
}

export interface AuthResponse {
    accessToken: string
    refreshToken: string
    user?: {
        id: string;
        name: string;
        email: string
    }
}

export interface RegisterRequest {
    email: string
    name: string
    password: string
}

export interface AccessTokenResponse {
    accessToken: string
}