"use client"

import { pegColors } from "../../../tailwind.config"
import { selectColor } from "@/app/redux/features/auth-slice"
import { AppDispatch, useAppSelector } from "@/app/redux/store"
import { useDispatch } from "react-redux"


export default function ColorPicker() {
    const dispatch = useDispatch<AppDispatch>();
    const { selectedColor, level } = useAppSelector((state) => state.authReducer.value.gameData);

    return <div className="flex-column mx-auto mt-auto mb-2 w-min w-full h-min border-solid border-2 rounded-lg">
        {
            [...pegColors].slice(0, level).map((color, idx) => 
                <button key={idx} className={`rounded-full h-12 w-12 m-2 border-[${color}] border-[10px] 
                ${selectedColor == color? "bg-purple":`bg-[${color}]`}`} 
                onClick={() => dispatch(selectColor(color))}>
                </button>
            )
        }
    </div>
}