"use client";
import { useEffect, useState } from "react";
import { __MEDALS } from "../../constants/colors-constants";
import HighscoreSkeleton from '../../components/HighscoreSkeleton/HighscoreSkeleton';
import HighscoreTable from "@/components/HighscoreTable/HighscoreTable";

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
    <div>
      <div className="relative overflow-x-auto mb-5">
        {highscoreList != null ? <HighscoreTable highscoreList={highscoreList}/> : <HighscoreSkeleton />}
      </div>
    </div>
  );
}
