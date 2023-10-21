import { AppDispatch, useAppSelector } from "@/app/redux/store";
import { useDispatch } from "react-redux";
import { setPegColor } from "@/app/redux/features/auth-slice";

export default function GuessPeg({ rowNum, idx }: { rowNum: number; idx: number }) {
  const { selectedColor, rows } = useAppSelector(
    (state) => state.authReducer.value.gameData
  );
  const dispatch = useDispatch<AppDispatch>();

  const setColor = () => {
    if (selectedColor !== null) {
      dispatch(setPegColor({ color: selectedColor, id: idx }));
    }
  };

  return (
    <div
      className={`h-12 w-12 sm:mx-1 ${ rows[rowNum].row[idx] != null? "border-solid": "border-dotted"} border-2 border-white rounded-full 
      bg-[${rows[rowNum].row[idx] || "inherit"}]`}
      onClick={() => (rowNum == 0 ? setColor() : "")}
    ></div>
  );
}
