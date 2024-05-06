import { createAsyncThunk } from "@reduxjs/toolkit";
import Apis from "../../../services/Index";



export const getAllProducts = createAsyncThunk("product/getAllProducts" , 
        async()=>{
                console.log("first" , data)
                let data =  await Apis.useProductClient.getAllProducts();
                console.log("xxxx" , data)
                return data;
})
