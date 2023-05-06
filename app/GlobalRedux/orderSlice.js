"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrdersData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getOrdersData, setOrdersData } = ordersSlice.actions;
export default ordersSlice.reducer;
