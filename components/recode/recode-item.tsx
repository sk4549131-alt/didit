

export default function RecodeItem() {
    return (
        <div className="p-8">
            <label htmlFor="record" className="text-[15px] font-bold">방금 무엇을 해냈나요?</label>
            <div className="mt-4 flex gap-3">
                <div className="flex h-14 flex-1 items-center gap-3 rounded-2xl border border-line bg-background/60 px-5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                    <input
                        id="record"
                        placeholder="작은 일도 좋아요. 완료한 일을 적어보세요."
                        className="w-full bg-transparent text-[15px] outline-none placeholder:text-muted/70"
                    />
                </div>
                <select className="h-14 rounded-2xl border border-line bg-white px-5 text-[15px] outline-none">
                    <option>일상</option>
                    <option>업무</option>
                    <option>건강</option>
                </select>
                <button className="flex h-14 items-center gap-2 rounded-2xl bg-brand px-8 text-[15px] font-medium text-white transition-opacity hover:opacity-90">
                    <span className="text-xl leading-none">+</span> 기록하기
                </button>
            </div>
        </div>
    )
}