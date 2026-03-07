import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string | number;
  title: string;
  price: number;
  qty: number;
  sum: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: initialState,
  reducers: {
    // addItemToCart
    addItemToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.qty += 1;
        existingItem.sum += action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
          qty: 1,
          sum: action.payload.price,
        });
      }
    },

    // deleteItemFromCart
    deleteItemFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem && existingItem.qty != 1) {
        existingItem.qty -= 1;
        existingItem.sum -= action.payload.price;
      } else {
        state.items = state.items.filter(
          (item) => item.id != action.payload.id,
        );
      }
    },

    // deleteProductFromCart
    deleteProductFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id != action.payload.id);
    },

    // emptyCart
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItemToCart,
  deleteItemFromCart,
  deleteProductFromCart,
  emptyCart,
} = cartSlice.actions;

export default cartSlice;
