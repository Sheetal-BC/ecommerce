import { configureStore } from "@reduxjs/toolkit";
import cartItem from "./cartItem";

const store = configureStore({
  reducer: {
    name: cartItem,
  },
});

export default store;
