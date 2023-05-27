import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartProducts: JSON.parse(localStorage.getItem("itemsCars")) || [],
  quantity: JSON.parse(localStorage.getItem("quantityCars")) || 0,
  total: JSON.parse(localStorage.getItem("totalCars")) || 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Get Products
    addItem: (state, action) => {
      state.cartProducts.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
      toast.info(`تم اضافة  ${action.payload.title} الي العربة `);

      localStorage.setItem("itemsCars", JSON.stringify(state.cartProducts));
      localStorage.setItem("quantityCars", JSON.stringify(state.quantity));
      localStorage.setItem("totalCars", JSON.stringify(state.total));
    },
    // Remove Item
    removeItem: (state, action) => {
      const nextCarItems = state.cartProducts.filter(
        (item) => item.date !== action.payload.date
      );
      state.quantity -= 1;
      state.total -= action.payload.price * action.payload.quantity;
      state.cartProducts = nextCarItems;
      toast.error(`تم حذف  ${action.payload.title} من العربة `);
      localStorage.setItem("itemsCars", JSON.stringify(state.cartProducts));
      localStorage.setItem("quantityCars", JSON.stringify(state.quantity));
      localStorage.setItem("totalCars", JSON.stringify(state.total));
    },
    clearItems: (state) => {
      state.cartProducts = [];
      state.quantity = 0;
      state.total = 0;
      toast.error(`تم حذف جميع المنتجات من العربة`);
      localStorage.setItem("itemsCars", JSON.stringify(state.cartProducts));
      localStorage.setItem("quantityCars", JSON.stringify(state.quantity));
      localStorage.setItem("totalCars", JSON.stringify(state.total));
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
