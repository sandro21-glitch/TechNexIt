import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { calcDiscount } from "../../utils/calculateDiscount";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const isDuplicate = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (!isDuplicate) {
        state.cart.push(action.payload);
        toast.success(`${action.payload.name} დაემატა თქვენს კალათაში!`);
      } else {
        toast.error("ნივთი უკვე კალათაშია");
      }
    },
    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      toast.success("პროდუქტი წაიშალა თქვენი კალათიდან");
    },
    clearCart(state) {
      state.cart = [];
      toast.success("თქვენი კალათა გასუფთავდა");
    },
    increaseAmount(state, action) {
      const currProduct = state.cart.find((item) => item.id === action.payload);
      if (currProduct) {
        if (currProduct.minAmount === currProduct.amount) return;
        currProduct.minAmount++;
        currProduct.totalPrice = currProduct.price * currProduct.minAmount;
      }
    },
    decreaseAmount(state, action) {
      const currProduct = state.cart.find((item) => item.id === action.payload);
      if (currProduct) {
        if (currProduct.minAmount <= 1) return;
        currProduct.minAmount--;
        currProduct.totalPrice = currProduct.price * currProduct.minAmount;
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  increaseAmount,
  decreaseAmount,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getTotalCartPrice = (state) => {
  const totalPrice = state.cart.cart.reduce(
    (acc, item) =>
      acc +
      (item.discount
        ? calcDiscount(item.totalPrice, item.discount)
        : item.totalPrice),
    0
  );
  return totalPrice;
};

export const getTotalDiscount = (state) => {
  const totalDiscount = state.cart.cart.reduce(
    (acc, item) =>
      acc +
      (item.discount
        ? item.totalPrice - calcDiscount(item.totalPrice, item.discount)
        : 0),
    0
  );
  return totalDiscount;
};

export const getProductWithId = (id) => (state) => {
  const curItem = state.cart.cart.find((item) => item.id === id);
  if (!curItem) return 0;
  return curItem.minAmount;
};
