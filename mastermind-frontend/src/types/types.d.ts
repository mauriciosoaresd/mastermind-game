type UserPayload = {
  username: string;
  pictureUrl: string;
  email: string;
};

type RowObject = { 
  row: any[]; 
  score: { 
    fit: number; 
    almost: number; 
    wrong: number 
  } 
}


type GamePayload = {
  started: boolean;
  level: LevelOptions;
  secret: string[];
  won: boolean;
  selectedColor: PegColors | null;
  startingTime: number | null;
  rows: RowObject[];
};

type InitialState = {
  value: {
    isAuth: boolean;
    userData: UserPayload | null;
    loading: boolean;
    gameData: GamePayload;
  };
};

type ResponseObject = {
  status: number;
  data?: {
    value?: string;
    message?: string;
  };
};

type DecodedJWT = {
  sub: string;
  email: string;
  picture: string;
};

type PegColors = "#d60a0a" | "#4eb604" | "#d4d70b" | "#0d0dd4" | "#d114bc" | "#686868";

type LevelOptions = 4 | 5 | 6;
