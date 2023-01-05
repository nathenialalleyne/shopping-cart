import { createSlice } from "@reduxjs/toolkit";

export const priceSlice = createSlice({
  name: "priceTotal",
  initialState: {
    price: 0,
  },
  reducers: {
    increase: (state, action) => {
      state.price += action.payload;
    },
  },
});

export const { increase } = priceSlice.actions;
export default priceSlice.reducer;
