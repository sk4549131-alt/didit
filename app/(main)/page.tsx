"use client"

import { useState, useEffect } from "react";
import { atToday} from "@/app/utils/date"
// Components
import RecordForm from "@/components/recode/recode-form";
import Header from "@/components/ui/header";

const moods = ['뿌듯해요', '평온해요', '아쉬워요'];

export default function Page() {

    const [getDate, setDate] = useState(new Date());

    return (
        <>
        { /* 헤더 */}
        <Header getDate={getDate} setDate={setDate} />

        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-10 px-14 pb-16 pt-14">
            { /* 사용자 입력 */}
            <RecordForm date={getDate} atToday={!atToday(getDate)}/>

            <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-[28px] border border-brand/10 bg-brand-soft/70 p-8">
                    <p className="text-[13px] font-bold tracking-[0.18em] text-brand">TODAY&apos;S NOTE</p>
                    <h3 className="mt-4 text-xl font-bold">오늘의 나에게 한마디</h3>
                    <textarea
                        placeholder="오늘 가장 기억하고 싶은 순간을 남겨보세요."
                        className="mt-5 h-[120px] w-full resize-none rounded-2xl bg-white/80 p-5 text-[15px] outline-none placeholder:text-muted/70"
                    />
                </div>
                <div className="rounded-[28px] border border-[#e9dfc4] bg-sand p-8">
                    <p className="text-[13px] font-bold tracking-[0.18em] text-[#8a7a45]">MOOD</p>
                    <h3 className="mt-4 text-xl font-bold">지금 기분은 어떤가요?</h3>
                    <div className="mt-5 flex flex-wrap gap-3">
                        {moods.map((m, i) => (
                            <button
                                key={m}
                                className={`rounded-full px-5 py-3 text-[15px] ${
                                    i === 0 ? 'bg-brand font-medium text-white' : 'bg-white/80 hover:bg-white'
                                }`}
                            >
                                {m}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}
