export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return <div className="w-full h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-blue-50 px-4">
        <div className="w-full max-w-md">
            <div className="flex justify-center mb-8">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </div>
                    <span className="text-2xl font-normal text-foreground">TaskFlow</span>
                </div>
            </div>
            {children}
            <p className="text-center text-sm text-muted-foreground mt-6">
                © {typeof window !== 'undefined' ? new Date().getFullYear() : 2024} TaskFlow. All rights reserved.
            </p>
        </div>
    </div>
}