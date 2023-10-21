"use client";
import { AppDispatch } from "@/app/redux/store";
import { useDispatch } from "react-redux";
import { setLevel, setNewGame } from "@/app/redux/features/auth-slice";
import { useRouter } from "next/navigation";

export default function DifficultyButton({
  text,
  colors,
}: {
  text: string;
  colors: any[];
}) {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleSetLevel = () => {
    dispatch(setLevel({ level: colors.length }));
    dispatch(setNewGame());
    router.push("/gamepage");
  };

  const pegs = () =>
    colors.map((color, index) => (
      <p key={index} className={`rounded-full h-8 w-8 m-1 sm:h-12 sm:w-12 sm:m-2 bg-[${color}]`}></p>
    ));
    
  return (
    <button
      className="flex hover:bg-pink hover:text-red rounded-lg"
      onClick={() => handleSetLevel()}
    >
      <h1 className="my-auto w-20">{text}</h1>
      <div className="flex">{ pegs() }</div>
    </button>
  );
}
