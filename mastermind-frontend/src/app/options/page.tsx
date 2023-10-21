"use client";

import Link from "next/link";
import DifficultyButton from "@/components/DifficultyButton/DifficultyButton";
import { pegColors } from "../../../tailwind.config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setNewGame } from "../redux/features/auth-slice";

export default function Options() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(setNewGame());
  }, []);

  return (
    <div className="my-auto text-center">
      <div className="py-4">
        <DifficultyButton text={"Easy"} colors={[...pegColors].slice(0, 4)} />
        <DifficultyButton text={"Normal"} colors={[...pegColors].slice(0, 5)} />
        <DifficultyButton text={"Hard"} colors={[...pegColors].slice(0, 6)} />
      </div>

      <Link
        href={"/gamepage"}
        className="border-solid border-2 rounded-full p-6 py-1 text-center my-2 transition ease-in-out delay-150 hover:scale-110 hover:bg-pink hover:border-pink hover:text-red"
      >
        Back
      </Link>
    </div>
  );
}
