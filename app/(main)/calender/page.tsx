// 디자인 전용 페이지: 아래 데이터는 모두 더미 값입니다. 기능 연결 시 교체하세요.

const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

const stats = [
    { label: '이번 달 완료', value: '48개', desc: '지난달보다 12개 더 했어요', dot: 'bg-brand' },
    { label: '꾸준히 기록', value: '8일', desc: '연속으로 기록하고 있어요', dot: 'bg-[#c9a24a]' },
    { label: '가장 많은 분야', value: '업무', desc: '전체 기록의 38%에요', dot: 'bg-brand' },
];

// 해당 월 1일의 요일(0=일), 총 일수, 일자별 완료 개수(0~5)
const firstWeekday = 0;
const daysInMonth = 30;
const counts: Record<number, number> = {
    1: 3, 2: 4, 3: 3, 4: 2, 5: 3, 6: 3,
    8: 5, 9: 3, 11: 3, 12: 4, 13: 3, 14: 2,
    15: 5, 17: 3, 18: 3, 19: 4, 20: 3, 21: 3,
};
const selectedDay = 19;

const levelClass = [
    'bg-white border border-dashed border-line text-muted',
    'bg-brand-soft/60 text-foreground',
    'bg-brand-soft text-foreground',
    'bg-[#b9d1bf] text-foreground',
    'bg-[#6f9c80] text-white',
    'bg-brand text-white',
];

const records = [
    { title: '미뤄둔 방 정리 깔끔하게 끝내기', time: '오후 9:15', category: '일상' },
    { title: '아침에 물 한 잔 마시고 스트레칭', time: '오전 7:30', category: '건강' },
    { title: '집중해서 중요한 업무 마무리', time: '오전 11:20', category: '업무' },
    { title: '점심시간에 동네 한 바퀴 걷기', time: '오후 1:10', category: '건강' },
];

export default function Page() {
    const cells: (number | null)[] = [
        ...Array.from({ length: firstWeekday }, () => null),
        ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];

    return (
        <>
        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-8 px-14 pb-16 pt-14">
            <section>
                <p className="text-[12px] font-bold tracking-[0.18em] text-muted">MONTHLY VIEW</p>
                <h1 className="mt-3 text-[32px] font-bold">한눈에 보는 나의 성취</h1>
                <p className="mt-3 text-[14px] text-muted">매일의 작은 완료가 만든 흐름을 확인해 보세요.</p>
            </section>

            {/* 요약 카드 */}
            <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {stats.map(s => (
                    <div key={s.label} className="relative rounded-[24px] border border-line bg-white p-6">
                        <span className={`absolute right-5 top-5 h-2 w-2 rounded-full ${s.dot}`} />
                        <p className="text-[13px] text-muted">{s.label}</p>
                        <p className="mt-3 text-[30px] font-bold leading-none">{s.value}</p>
                        <p className="mt-3 text-[12px] text-muted">{s.desc}</p>
                    </div>
                ))}
            </section>

            {/* 달력 */}
            <section className="rounded-[28px] border border-line bg-white p-8">
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className="text-xl font-bold">2026년 11월</h2>
                        <p className="mt-2 text-[13px] text-muted">색이 진할수록 더 많은 일을 해냈어요.</p>
                    </div>
                    <div className="flex items-center gap-4 text-muted">
                        <button aria-label="이전 달" className="rounded-full p-2 hover:bg-side">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
                        </button>
                        <button aria-label="다음 달" className="rounded-full p-2 hover:bg-side">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-7 gap-3">
                    {weekdays.map((w, i) => (
                        <div
                            key={w}
                            className={`pb-2 text-center text-[13px] font-medium ${i === 0 ? 'text-[#c0675c]' : 'text-muted'}`}
                        >
                            {w}
                        </div>
                    ))}

                    {cells.map((day, i) => {
                        if (day === null) return <div key={`empty-${i}`} />;
                        const count = counts[day] ?? 0;
                        const selected = day === selectedDay;
                        return (
                            <button
                                key={day}
                                className={`flex aspect-[1.2/1] flex-col justify-between rounded-2xl p-3 text-left transition hover:brightness-95 ${levelClass[count]} ${
                                    selected ? 'ring-2 ring-brand ring-offset-2' : ''
                                }`}
                            >
                                <span className="text-[13px] font-semibold">{day}</span>
                                {count > 0 && <span className="text-[12px] font-medium">{count}개 완료</span>}
                            </button>
                        );
                    })}
                </div>

                <div className="mt-6 flex items-center justify-end gap-2 text-[12px] text-muted">
                    <span>적게</span>
                    {[1, 2, 3, 4, 5].map(l => (
                        <span key={l} className={`h-3 w-3 rounded-[4px] ${levelClass[l]}`} />
                    ))}
                    <span>많이</span>
                </div>

                {/* 선택한 날의 기록 */}
                <div className="mt-10 border-t border-line pt-8">
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-[12px] font-bold tracking-[0.18em] text-muted">DAY&apos;S RECORD</p>
                            <h3 className="mt-2 text-lg font-bold">11월 19일 목요일</h3>
                        </div>
                        <p className="text-[13px] text-muted">4개의 일을 해냈어요</p>
                    </div>

                    <ul className="mt-5 grid max-h-[220px] grid-cols-1 gap-3 overflow-y-auto md:grid-cols-2">
                        {records.map(r => (
                            <li
                                key={r.title}
                                className="flex items-center gap-4 rounded-2xl border border-line bg-background px-5 py-4"
                            >
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-10" /></svg>
                                </span>
                                <div className="min-w-0">
                                    <p className="truncate text-[15px] font-medium">{r.title}</p>
                                    <p className="mt-1 text-[12px] text-muted">{r.time} · {r.category}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
        </>
    )
}
