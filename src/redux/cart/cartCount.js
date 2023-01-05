import { createSlice } from "@reduxjs/toolkit";

export const amountSlice = createSlice({
  name: "cartAmount",
  initialState: {
    items: [],
    count: 0,
    price: 0,
  },

  reducers: {
    addQuant: (state, action) => {
      state.items.forEach((e) => {
        if (e.productName === action.payload) {
          e.productQuantity += 1;
          console.log(e.productQuantity);
        }
      });
    },

    remQuant: (state, action) => {
      state.items.forEach((e) => {
        if (e.productName === action.payload) {
          if (e.productQuantity > 0) {
            e.productQuantity -= 1;
            console.log(e.productQuantity);
          }
        }
      });
    },

    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    increase: (state, action) => {
      state.price += action.payload;
    },
    decrease: (state, action) => {
      state.price -= action.payload;
      console.log(state.price);
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    remItem: (state, action) => {
      state.items.forEach((e) => {
        if (e.productName === action.payload) {
          state.items.splice(e.indexOf, 1);
        }
      });
    },
  },
});

export const {
  addQuant,
  remQuant,
  increment,
  decrement,
  setPrice,
  increase,
  decrease,
  addItem,
  remItem,
} = amountSlice.actions;
export default amountSlice.reducer;
