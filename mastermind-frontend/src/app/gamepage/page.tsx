import Gameboard from "@/components/Gameboard/Gameboard";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function GamePage() {
  return (
    <>
      <div className="flex flex-nowrap justify-center w-full h-full pb-6">
        <Gameboard />
        <Sidebar />
      </div>
    </>
  );
}
