import RecordForm from "@/components/recode/recode-form";

const moods = ['뿌듯해요', '평온해요', '아쉬워요'];

export default function Page() {
    return (
        <>
        <header className="flex h-[82px] items-center justify-end gap-8 border-b border-line px-14">
            <div className="flex items-center gap-5 text-[15px] font-medium">
                <button aria-label="이전 날짜" className="text-muted">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
                </button>
                <span className="flex items-center gap-2.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
                    10월 20일 화요일
                </span>
                <button aria-label="다음 날짜" className="text-muted">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-sm font-medium text-brand">지</span>
        </header>

        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-10 px-14 pb-16 pt-14">
            <RecordForm />

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
