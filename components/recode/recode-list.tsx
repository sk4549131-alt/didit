import { Dispatch, SetStateAction } from "react"

type Props = {
    records: Record<string, RecordType[]>,
    setRecords: Dispatch<SetStateAction<Record<string, RecordType[]>>>,
    today: string
}

type RecordType = {
    id: number
    title: string
    time: string
    category: string
}

export default function RecodeList({ records, setRecords, today } : Props) {
    const todayRecords = (today && records[today]) || [];

    function removeList(id: number) {
        setRecords(prev => ({
            ...prev,
            [today]: (prev[today] ?? []).filter(data => data.id !== id)
        }))
    }

    return (
        <div className="border-t border-line p-8">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">내가 해낸 일</h2>
                <span className="text-[13px] text-muted">총 {Object(records).length}개</span>
            </div>
            <ul className="mt-6 flex flex-col gap-7">
                {todayRecords.map(r => (
                    <li key={r.id} className="group flex items-center gap-5 px-2">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                        </span>
                        <div className="flex-1">
                            <p className="text-[17px] font-medium">{r.title}</p>
                            <p className="mt-1.5 flex items-center gap-2 text-[13px] text-muted">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                                {r.time}
                                <span className="h-1 w-1 rounded-full bg-muted/60" />
                                {r.category}
                            </p>
                        </div>
                        <button className="text-[13px] text-muted opacity-0 transition-opacity group-hover:opacity-100" onClick={() => removeList(r.id)}>
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}