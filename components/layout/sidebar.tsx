'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SidebarItem = {
    id: number,
    title: string,
    url: string,
    icon: React.ReactNode
}

const iconProps = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
} as const;

const data: SidebarItem[] = [
    {
        id: 1, title: '오늘의 기록', url: '/',
        icon: <svg {...iconProps}><path d="M3 11l9-8 9 8" /><path d="M5 10v10h5v-6h4v6h5V10" /></svg>,
    },
    {
        id: 2, title: '한눈에 보기', url: '/all',
        icon: <svg {...iconProps}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>,
    },
    {
        id: 3, title: '나의 기록함', url: '/save',
        icon: <svg {...iconProps}><rect x="3" y="3" width="18" height="5" rx="1" /><path d="M5 8v12h14V8M10 12h4" /></svg>,
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex h-full flex-col px-5 py-8">
            <Link href="/" className="flex items-center gap-3 px-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                </span>
                <span className="text-xl font-bold tracking-tight">오늘도, 했다</span>
            </Link>

            <nav className="mt-12 flex flex-col gap-2">
                {data.map(item => {
                    const active = pathname === item.url;
                    return (
                        <Link
                            key={item.id}
                            href={item.url}
                            className={`flex items-center gap-3 rounded-2xl px-5 py-3.5 text-[15px] transition-colors ${
                                active
                                    ? 'bg-white font-medium text-brand shadow-sm'
                                    : 'text-muted hover:bg-white/60'
                            }`}
                        >
                            {item.icon}
                            {item.title}
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-auto rounded-3xl bg-brand-soft p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /><path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" /></svg>
                </span>
                <p className="mt-6 text-[15px] font-bold leading-relaxed">
                    작은 완료가 쌓여<br />나를 만듭니다.
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                    오늘 해낸 일을 놓치지 말고<br />가볍게 기록해 보세요.
                </p>
            </div>
        </div>
    );
}
