export default function GameButton({ text, fn }: { text: string; fn: any }) {
  return (
    <button
      onClick={() => fn()}
      className="border-solid border-2 rounded-full p-2 py-1 text-center my-2 transition ease-in-out delay-150 hover:scale-110 hover:bg-pink hover:border-pink hover:text-red"
    >
      {text}
    </button>
  );
}
