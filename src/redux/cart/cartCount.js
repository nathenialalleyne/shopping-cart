import { createSlice } from "@reduxjs/toolkit";

export const amountSlice = createSlice({
  name: "cartAmount",
  initialState: {
    count: 0,
  },

  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = amountSlice.actions;
export default amountSlice.reducer;
