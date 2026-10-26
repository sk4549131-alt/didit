import React from "react";
import SideBar from "@/components/layout/sidebar";

export default function MainLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen">
            <aside className="sticky top-0 h-screen w-[272px] shrink-0 border-r border-line bg-side">
                <SideBar />
            </aside>
            <div className="flex min-w-0 flex-1 flex-col">
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    )
}
