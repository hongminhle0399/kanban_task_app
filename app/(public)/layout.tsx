import { BoardSelector } from "@/features/dashboard/ui/BoardSelector";
import Header from "@/shared/layout/Header"

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>
        <Header leftSlot={<BoardSelector />} />
        {children}
    </>

}