import { useAppSelector } from "@/app/redux/store";
import GuessPeg from "../GuessPeg/GuessPeg"

export default function GuessPegs({ rowNum, row } : { rowNum: number, row: string[]|null[] }) {
  const { won } = useAppSelector((state) => state.authReducer.value.gameData);

    return <div className={`w-min h-full flex flex-nowrap py-1 rounded-lg ${won && rowNum == 0? "bg-red hover:bg-pink":""}`}>
        {
            row.map((val, idx) => <GuessPeg idx={idx} rowNum={rowNum} key={idx}/>)
        }  
    </div>
}