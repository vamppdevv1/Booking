import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  darkMode: false,
};

export const darkmodeSLice = createSlice({
  name: "darkMode",
  initialState: INITIAL_STATE,
  reducers: {
    toggle: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggle } = darkmodeSLice.actions;
export default darkmodeSLice.reducer;
