'use client'

import { LayoutDashboard, LogOut, Search } from "lucide-react"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { useState } from "react"
import { useAuthStore } from "@/features/auth/store/authStore"
import { authApi } from "@/features/auth/services/auth-api"

export interface HeaderProps {
    leftSlot?: React.ReactNode
}

function Header({ leftSlot }: HeaderProps) {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const username = useAuthStore(state => state.username)

    const onLogout = () => {
        authApi.logout()
    }

    return (
        <header className="bg-white border-b border-border sticky top-0 z-10 shrink-0 shadow-sm">
            <div className="px-6 py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="bg-linear-to-br from-blue-500 to-blue-600 p-2 rounded-lg shadow-md">
                        <LayoutDashboard className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="text-xl hidden sm:block">Kanban Board</h1>

                    {leftSlot}
                </div>

                {/* Search Bar */}
                <div className="flex-1 max-w-md mx-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search tasks..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 border-2 focus:border-primary/50"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground hidden sm:block">
                        Welcome, {username}
                    </span>
                    <Button variant="ghost" size="sm" onClick={onLogout} className="hover:bg-red-50 hover:text-red-600">
                        <LogOut className="w-4 h-4" />
                        <span className="ml-2 hidden sm:inline">Logout</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header
