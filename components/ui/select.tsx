import { ChangeEvent, Dispatch, SetStateAction } from "react"

type Props = {
    list: string[],
    setForm: Dispatch<SetStateAction<RecodeFormValues>>
}

type RecodeFormValues = {
    title: string, 
    category: string
}

export default function Select({ list, setForm }: Props) {

    function selectItem(e: ChangeEvent<HTMLSelectElement>) {
        setForm(prev => {
            return {
                ...prev,
                category: e.target.value
            }
        })
    }

    return (
        <select className="h-14 rounded-2xl border border-line bg-white px-5 text-[15px] outline-none"
        onChange={selectItem}
        >
            {
                list.map(item => {
                    return (
                         <option key={item}>{item}</option>
                    )
                })
            }
        </select>
    )
}