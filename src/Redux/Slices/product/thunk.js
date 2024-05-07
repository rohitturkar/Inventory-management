import { createAsyncThunk } from "@reduxjs/toolkit";
import Apis from "../../../services/Index";

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async () => {
    let data = await Apis.useProductClient.getAllProducts();

    return data;
  }
);
