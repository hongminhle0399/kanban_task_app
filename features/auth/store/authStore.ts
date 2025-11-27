import { create } from 'zustand'

type AuthState = {
    accessToken: string | null;
    setAccessToken: (token: string | null) => void;

    username: string | null;
    userId: string | null;
}

export const useAuthStore = create<AuthState>((set) => ({
    accessToken: null,
    username: null,
    userId: null,
    setAccessToken: (token) => set({ accessToken: token })
}))