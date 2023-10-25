import { checkScore, getNewGuess, secretGenerator } from "@/utils/gameUtils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: InitialState = {
  value: {
    isAuth: false,
    loading: true,
    userData: null,
    gameData: {
      level: 4,
      secret: secretGenerator(),
      started: false,
      won: false,
      selectedColor: null,
      startingTime: null,
      rows: [getNewGuess()],
    },
  },
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => initialState,
    logIn: (state, action: PayloadAction<UserPayload>) => {
      state.value.isAuth = true
      state.value.userData = action.payload
      state.value.loading = false

    },
    stopLoading: (state) => {
      state.value.loading = false
    },
    selectColor: (state, action: PayloadAction<PegColors>) => {
      state.value.gameData.selectedColor = action.payload
      state.value.gameData.started = true
      state.value.gameData.startingTime = (state.value.gameData.startingTime == null) ?
       new Date().getTime() : state.value.gameData.startingTime
    },
    sendGuess: (state) => {
      const score = checkScore(
        state.value.gameData.rows[0].row,
        state.value.gameData.secret
      );

      state.value.gameData.rows[0].score = score;
      if (score.fit == 4) {
        state.value.gameData.won = true;
      } else {
        state.value.gameData.rows.unshift(getNewGuess());
      }
    },

    setPegColor: (state, action: PayloadAction<any>) => {
      if (!state.value.gameData.won) {
        state.value.gameData.rows[0].row[action.payload.id] = action.payload.color;
      }
    },

    setLevel: (state, action: PayloadAction<any>) => {
      state.value.gameData.level = action.payload.level;
    },

    setNewGame: (state) => {
      const level = state.value.gameData.level;

      state.value.gameData = {...initialState.value.gameData};
      state.value.gameData.level = level;
      state.value.gameData.secret = secretGenerator(level);
    },
  },
});

export const {
  logIn,
  logOut,
  stopLoading,
  selectColor,
  sendGuess,
  setPegColor,
  setNewGame,
  setLevel,
} = auth.actions;
export default auth.reducer;
