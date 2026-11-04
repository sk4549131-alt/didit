import { ActionDispatch, Dispatch, SetStateAction, useState } from 'react';
import { dateFormat, subDate, addDate, atToday} from "@/app/utils/date";

type Props = {
    getDate: Date,
    setDate: Dispatch<SetStateAction<Date>>
}

export default function Header({ setDate, getDate } : Props) {

    function changeDate(type: 'prev' | 'next') {
        setDate(prev => prev && (type === 'prev' ? subDate(prev) : addDate(prev)));
    }

    return (
        <header className="flex h-[82px] items-center justify-end gap-8 border-b border-line px-14">
            <div className="flex items-center gap-5 text-[15px] font-medium">
                <button aria-label="이전 날짜" className="text-muted" 
                    onClick={() => changeDate('prev')} 
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
                </button>
                <span className="flex items-center gap-2.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
                    { dateFormat(getDate, 'MM월 dd일 (EEE)') }
                </span>
                {
                    !atToday(getDate) && (
                        <button aria-label="다음 날짜" className="text-muted" 
                            onClick={() => changeDate('next')}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
                        </button>
                    )
                }
                <button onClick={() => setDate(new Date()) }>Today</button>
            </div>
        </header>
    )
}