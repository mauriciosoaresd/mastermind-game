"use client";
import { useEffect, useState } from "react";
import { __MEDALS } from "../../constants/colors-constants";
import HighscoreSkeleton from '../../components/HighscoreSkeleton/HighscoreSkeleton';
import HighscoreTable from "@/components/HighscoreTable/HighscoreTable";
import Link from "next/link";

export default function Highscore() {
  const [highscoreList, setHighscoreList] = useState<null | []>(null);

  useEffect(() => {
    const highscoreData = () =>
      fetch("/api/mastermind").then(async (res) => {
        let data: [] = await res.json();
        setHighscoreList(data);
      });
    highscoreData();
  }, []);

  return (
    <div className="text-center">
      <div className="relative overflow-x-auto mb-5 w-100">
        {highscoreList != null ? <HighscoreTable highscoreList={highscoreList}/> : <HighscoreSkeleton />}
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
