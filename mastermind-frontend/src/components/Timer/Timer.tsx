"use client";
import { useAppSelector } from "@/app/redux/store";
import { useState, useEffect } from "react";

export default function Timer() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const { startingTime, started, won } = useAppSelector((state) => state.authReducer.value.gameData);

  const timer = () => {
    const now = new Date().getTime();
    if (startingTime !== null && !won) {
      setElapsedTime((now - startingTime) / 1000);
    }
  };

  useEffect(() => {
    // Resets time at New Game click
    if (won == false) {
      setElapsedTime(0);
    }
    const interval = setInterval(() => timer(), 1000);
    return () => clearInterval(interval);
  }, [started, won]);

  return (
    <div className="w-full h-fit text-center font-bold my-2">
      <h1>
        {Math.floor(elapsedTime / 60)
          .toString()
          .padStart(2, "0")}
        :
        {Math.floor(elapsedTime % 60)
          .toString()
          .padStart(2, "0")}
      </h1>
    </div>
  );
}
