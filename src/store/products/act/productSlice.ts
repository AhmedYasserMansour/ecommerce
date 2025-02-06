import { createSlice } from "@reduxjs/toolkit";
import getProducts from "./getProducts";
import { TLoading, IProducts } from "@CustomTypes/Shared";

interface IProductsState {
    products: IProducts[],
    loading: TLoading,
    error: null | string, 
}

const initialState: IProductsState = {
    products: [],
    loading: "idle",
    error: null,
}
const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers : {
        productscleanUp: (state)=> {state.products = []}
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = 'pending';
            state.error = null;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading ='succeeded';
                state.products = action.payload as IProducts[];
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.payload as string; 
        });
    }
});


export const { productscleanUp } = ProductsSlice.actions
export {getProducts}
export default ProductsSlice.reducer;