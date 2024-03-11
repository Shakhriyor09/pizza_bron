import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    deleteToCart(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseCart(state, action) {
      const pizza = state.cart.find((item) => item.pizzaId === action.payload);

      if (pizza) {
        pizza.quantity++;
        pizza.totalPrice = pizza.quantity * pizza.unitPrice;
      }
    },
    decreaseCart(state, action) {
      const pizza = state.cart.find((item) => item.pizzaId === action.payload);

      if (pizza) {
        pizza.quantity--;
        pizza.totalPrice = pizza.quantity * pizza.unitPrice;

        if (pizza.quantity === 0)
          cartSlice.caseReducers.deleteToCart(state, action);
      }
    },
    clear(state) {
      state.cart = [];
    },
  },
});

export const getTotalCartQuantity = (state) => {
  return state.cart.cart.reduce((calc, item) => calc + item.quantity, 0);
};
export const getTotalCartPrice = (state) => {
  return state.cart.cart.reduce((calc, item) => calc + item.totalPrice, 0);
};

export const getCurrentQuantity = (id) => {
  return (state) => state.cart.cart.find((item) => item.pizzaId === id);
};

export const {
  addToCart,
  deleteToCart,
  increaseCart,
  decreaceCart,
  decreaseCart,
  clear,
} = cartSlice.actions;
export default cartSlice.reducer;
