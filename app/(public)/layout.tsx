import Header from "@/shared/layout/Header"

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>
        <Header />
        {children}
    </>

}