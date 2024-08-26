import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    inventoryData:[]
};

const productSlice = createSlice({
  name: "product",
  initialState: INITIAL_STATE,

  reducers: {
    SET_PRODCUT_DATA: (state, action) => {
      state.inventoryData = action.payload;
    },
  },
});


export const {SET_PRODCUT_DATA} =productSlice.actions

export default productSlice.reducer;