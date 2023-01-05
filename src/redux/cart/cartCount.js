import { createSlice } from "@reduxjs/toolkit";

export const amountSlice = createSlice({
  name: "cartAmount",
  initialState: {
    items: [],
    count: 0,
    price: 0,
  },

  reducers: {
    change: (state, action) => {
      state.items.forEach((e) => {
        if (e.productName === action.payload) {
          e.productQuantity += 1;
          console.log(e.productQuantity);
        }
      });
    },

    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    increase: (state, action) => {
      state.price += action.payload;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { change, increment, decrement, increase, addItem } =
  amountSlice.actions;
export default amountSlice.reducer;
