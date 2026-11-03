"use client"

import Select from "@/components/ui/select";
import RecodeList from "@/components/recode/recode-list";
import { useState, useEffect } from "react";

type Props = {
    date: string,
    atToday: boolean
}

type RecordType = {
    id: number
    title: string
    time: string
    category: string
}

export default function RecordForm({ date, atToday } : Props) {
    const [records, setRecords] = useState<Record<string, RecordType[]>>({});
    const [form, setForm] = useState({ title: '', category: '일상' });
    const [loaded, setLoaded] = useState(false);
    const todayCount = records[date]?.length ?? 0;

    useEffect(() => {
        console.log("load effect", performance.now());
        const raw = localStorage.getItem('items');
        if (raw) setRecords(JSON.parse(raw));
        setLoaded(true);
    }, []);

    useEffect(() => {
        console.log("save effect", { loaded, count: Object.keys(records).length });
        if (loaded) localStorage.setItem("items", JSON.stringify(records));
    }, [records, loaded]);

    function addList() {
        if (form?.title !== '') {;
            setRecords(prev => ({
                ...prev,
                [date]: [
                    ...prev[date] ?? [],
                    { 
                        id: Date.now(),
                        title: form.title, 
                        time: new Date().toLocaleTimeString(),
                        category: form.category
                    }
                ] 
            }));

            setForm({ title: '', category: '일상' });
        }
    }

    return (
        <>
        <section className="flex items-end justify-between">
            <div>
                <p className="text-[15px] font-bold tracking-wide text-brand">TODAY&apos;S DONE</p>
                <h1 className="mt-4 text-[44px] font-bold leading-tight tracking-tight">오늘도 이만큼 해냈어요.</h1>
                <p className="mt-4 text-[15px] text-muted">해야 할 일보다, 해낸 일에 집중하는 시간</p>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-white/60 px-7 py-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-lg font-bold text-brand">{todayCount}</span>
                <div>
                    <p className="text-xs text-muted">오늘의 완료</p>
                    <p className="text-[15px] font-bold">{todayCount}개의 작은 성취</p>
                </div>
            </div>
        </section>

        <section className="rounded-[32px] border border-line bg-white shadow-[0_8px_30px_rgba(40,60,50,0.05)]">
            <div className="p-8">
                <label htmlFor="record" className="text-[15px] font-bold">방금 무엇을 해냈나요?</label>
                <div className="mt-4 flex gap-3">
                    <div className="flex h-14 flex-1 items-center gap-3 rounded-2xl border border-line bg-background/60 px-5">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                        <input
                            id="record"
                            placeholder="작은 일도 좋아요. 완료한 일을 적어보세요."
                            className="w-full bg-transparent text-[15px] outline-none placeholder:text-muted/70"
                            value={form.title}
                            disabled={atToday}
                            onChange={
                                (e) => {
                                    setForm(prev => ({
                                        ...prev,
                                        title: e.target.value
                                    }))
                                }
                            }
                        />
                    </div>
                    <Select 
                        list={['일상', '업무', '건강']} 
                        setForm={setForm}
                    />
                    <button className="flex h-14 items-center gap-2 rounded-2xl bg-brand px-8 text-[15px] font-medium text-white transition-opacity hover:opacity-90" onClick={() => addList()}>
                        <span className="text-xl leading-none">+</span> 기록하기
                    </button>
                </div>
            </div>

            <RecodeList records={records} setRecords={setRecords} today={date}/>

        </section>
        </>
    )
}