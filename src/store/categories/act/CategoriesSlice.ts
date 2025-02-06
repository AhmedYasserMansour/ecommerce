import { createSlice } from "@reduxjs/toolkit";
import getCategories from './getCategories';
import { TLoading, ICategory } from "@CustomTypes/Shared";

interface ICategoriesState {
    categories: ICategory[],
    loading: TLoading,
    error: null | string, 
}
const initialState: ICategoriesState = {
    categories: [],
    loading: "idle",
    error: null,
}
const CategoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers : {
        categoriesCleanUp: (state)=> {state.categories = []}
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.loading = 'pending';
            state.error = null;
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.loading ='succeeded';
            state.categories = action.payload;
        });
        builder.addCase(getCategories.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.payload as string; 
        });
    }
});

export {getCategories}
export const {categoriesCleanUp} = CategoriesSlice.actions
export default CategoriesSlice.reducer;