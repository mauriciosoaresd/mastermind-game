import ScorePeg from "../ScorePeg/ScorePeg";

export default function GuessScore({
  score,
}: {
  score: { fit: number; wrong: number; almost: number };
}) {
  const pegs: string[] = [];

  const scorePegsHandler = () => {
    // Iterate over score attributes
    for (const [index, [key, value]] of Object.entries(Object.entries(score))) {
      // Iterate over attribute value and push its attribute name to pegs array
      for (let i = 0; i < value; i++) {
        pegs.push(key);
      }
    }
  };

  scorePegsHandler();

  return (
    <div className="flex flex-row flex-wrap mt-[5px] w-12 h-full justify-center">
      {pegs.map((text, idx) => (
        <ScorePeg text={text} key={idx} />
      ))}
    </div>
  );
}
