"use client";

import { useDispatch } from "react-redux";
import GuessPegs from "../GuessPegs/GuessPegs";
import GuessScore from "../GuessScore/GuessScore";
import { AppDispatch, useAppSelector } from "@/app/redux/store";
import { sendGuess } from "@/app/redux/features/auth-slice";
import { useEffect } from "react";

export default function GuessRow({
  rowNum,
  rowObj,
}: {
  rowNum: number;
  rowObj: RowObject;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const { won, level, startingTime, rows } = useAppSelector(
    (state) => state.authReducer.value.gameData
  );

  const checkSendGuess = () => {
    if (!rowObj.row.includes(null)) {
      dispatch(sendGuess());
    }
  };

  useEffect(() => {
    if (won) {
      fetch("/api/mastermind", {
        method: "POST",
        body: JSON.stringify({
          level,
          startingTime,
          rowCount: rows.length,
        }),
      });
    }
  }, [won]);

  return (
    <div className="flex w-full h-fit justify-end my-1">
      <GuessPegs rowNum={rowNum} row={rowObj.row} />
      {rowNum == 0 && !won ? (
        <button
          className="w-12 transition ease-in-out delay-150 hover:scale-125 hover:text-pink"
          onClick={() => checkSendGuess()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </button>
      ) : (
        <GuessScore score={rowObj.score} />
      )}
    </div>
  );
}
