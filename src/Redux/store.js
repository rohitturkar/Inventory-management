import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Redux/Slices/product/slice";

const store = configureStore({
    reducer: {
       product: productReducer
    }
});

export default store;
