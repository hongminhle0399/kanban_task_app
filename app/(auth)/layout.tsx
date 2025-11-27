export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return <div className="w-full h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-blue-50 px-4">
        {children}
    </div>
}