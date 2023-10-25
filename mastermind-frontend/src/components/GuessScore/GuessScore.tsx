import ScorePeg from "../ScorePeg/ScorePeg";

export default function GuessScore({
  score,
}: {
  score: { fit: number; wrong: number; almost: number };
}) {
  const pegs: string[] = [];

  const setScoreIconsHandler = () => {
    for (const [index, [key, value]] of Object.entries(Object.entries(score))) {
      for (let i = 0; i < value; i++) {
        pegs.push(key);
      }
    }
  };

  setScoreIconsHandler();

  return (
    <div className="flex flex-row flex-wrap mt-[5px] w-12 h-full justify-center">
      {pegs.map((text, idx) => (
        <ScorePeg text={text} key={idx} />
      ))}
    </div>
  );
}
