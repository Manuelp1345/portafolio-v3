import { createSlice } from "@reduxjs/toolkit";

export enum Language {
  Spanish = "spanish",
  English = "english",
  Español = "español",
  Ingles = "ingles",
}

export const counterSlice = createSlice({
  name: "language",
  initialState: {
    value: Language.Spanish,
  },

  reducers: {
    changeLanguage: (state, action) => {
      if (
        action.payload === Language.Español ||
        action.payload === Language.Spanish
      ) {
        state.value = Language.Spanish;
      } else {
        state.value = Language.English;
      }
    },
  },
});

export const { changeLanguage } = counterSlice.actions;

export default counterSlice.reducer;
