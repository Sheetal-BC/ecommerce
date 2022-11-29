import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  quantity: 0,
  showCart: false,
};
const cartItem = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.cart[find].quantity += 1;
        
      } else {
        const res = { ...action.payload, quantity: 1 };
        state.cart.push(res);
        
        localStorage.setItem("cartItem", JSON.stringify(state.cart));
        
      }
    },
    displayCart: (state) => {
      state.showCart = true;
    },
    hiddenCart: (state) => {
      state.showCart = false;
    },
    removeCart: (state, action) => {
      const find = state.cart.findIndex((item) => item.id === action.payload);
      if (find >= 0 && state.cart[find].quantity - 1 > 0) {
        
        state.cart[find].quantity -= 1;
      } else {
        state.cart = [];
      }
       
    },
    deletCart: (state, action) => {
      const cartItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = cartItem;
    },
  },
});

export const {
  addCart,
  displayCart,
  hiddenCart,
  removeCart,
  deletCart,
} = cartItem.actions;
export default cartItem.reducer;
