export type RecordType = {
    id: string
    title: string
    time: string
    category: string
}

export type RecordDay = Record<string, RecordType[]>;
export type RecordMonth = Record<string, RecordDay>;
export type RecordYear = Record<string, RecordMonth>;
