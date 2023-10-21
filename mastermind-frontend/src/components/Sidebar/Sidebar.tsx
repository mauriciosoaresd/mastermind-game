"use client";

import Link from "next/link";
import ColorPicker from "../ColorPicker/ColorPicker";
import GameButton from "../GameButton/GameButton";
import Timer from "../Timer/Timer";
import { setNewGame } from "@/app/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";

export default function Sidebar() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="flex flex-col w-fit ml-1 sm:ml-3 justify-between">
      <ColorPicker />
      <Timer />
      <GameButton text="New Game" fn={() => dispatch(setNewGame())} />
      <Link
        href={"/options"}
        className="border-solid border-2 rounded-full p-2 py-1 text-center my-2 transition ease-in-out delay-150 hover:scale-110 hover:bg-pink hover:border-pink hover:text-red">
        Options
      </Link>
    </div>
  );
}
