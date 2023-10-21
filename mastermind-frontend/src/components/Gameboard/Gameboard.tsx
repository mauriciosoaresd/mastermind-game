"use client";

import GuessRow from "../GuessRow/GuessRow";
import { useAppSelector } from "@/app/redux/store";
import { useEffect } from "react";
import { setNewGame } from "@/app/redux/features/auth-slice";
import { AppDispatch } from "../../app/redux/store";
import { useDispatch } from "react-redux";

export default function Gameboard() {
  const { rows } = useAppSelector((state) => state.authReducer.value.gameData);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    return () => {
      dispatch(setNewGame());
    };
  }, []);

  return (
    <div className="w-fit min-h-[60vh] flex flex-col-reverse content-end mt-auto">
      {rows.map((rowObj: RowObject, idx: number) => (
        <GuessRow key={idx} rowNum={idx} rowObj={rowObj} />
      ))}
    </div>
  );
}
