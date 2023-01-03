import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "./cart/cartCount";

export default configureStore({
  reducer: {
    counter: amountReducer,
  },
});
