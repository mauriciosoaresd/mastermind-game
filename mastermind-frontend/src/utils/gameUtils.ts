import { __MEDALS } from "@/constants/colors-constants";
import { pegColors } from "../../tailwind.config";

export const getNewGuess = () => {
  return {
    row: [null, null, null, null],
    score: { fit: 0, almost: 0, wrong: 0 },
  };
};

export  const secretGenerator = (actualLevel = 4) => {
  let level = actualLevel === undefined ? 4 : actualLevel
  const secret = new Array(4).fill(null).map(() => pegColors[Math.floor(Math.random() * level)] );
  return secret;
}

export const checkScore = (row: any[], secret: any[]) => {
  let rowCopy = [...row];
  let secretCopy = [...secret];

  let fit = 0;
  let almost = 0;
  let wrong = 0;

  if (row == secret) return { fit: 4, almost, wrong };

  let { fitCount, rowFitChecked, secretFitChecked } = checkPegsFit(rowCopy, secretCopy)
  let { almostCount } = checkPegsAlmost(rowFitChecked, secretFitChecked)
  fit = fitCount;
  almost = almostCount;
  wrong = 4 - fit - almost;

  return { fit, almost, wrong };
};

export const checkWin = (row: string[], secret: string) => {
  return row.every((val, index) => val == secret[index]);
};

const checkPegsFit = (row: any[], secret: any[]) => {
  let fit = 0;
  for (let i = 0; i < 4; i++) {
    if (row[i] == secret[i]) {
      fit++;
      row[i] = null;
      secret[i] = null;
    }
  }
  return { fitCount: fit, rowFitChecked: row, secretFitChecked: secret }
}

const checkPegsAlmost = (row: any[], secret: any[]) => {
  let almost = 0;
  for (let i = 0; i < 4; i++) {
    if (row[i] !== null && secret.includes(row[i])) {
      almost++;
      secret[secret.indexOf(row[i])] = null;
      row[i] = null;
    }
  }
  return {almostCount: almost, rowAlmostChecked: row, secretAlmostChecked: secret}
}

export const setMedal = (idx: number | null) => {
  if(idx == 0) return __MEDALS.gold;
  if(idx == 1) return __MEDALS.silver;
  if(idx == 2) return __MEDALS.bronze;
  return __MEDALS.white;
}