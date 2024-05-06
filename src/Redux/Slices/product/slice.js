import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
  name: "product",
  initialState: {
    inventoryData: [],
},
  reducers: {
    ADD_INVENTORY_DATA(state, action) {
      state.inventoryData = [...state.inventoryData, action.payload];
    },
    setAllProds(state, action){
      state.inventoryData = action.payload;
    }
   
  },
});

export const {
  ADD_INVENTORY_DATA,
  setAllProds
} = productSlice.actions;

export default productSlice.reducer;
