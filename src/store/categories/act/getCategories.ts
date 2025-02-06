import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICategory } from '@CustomTypes/Shared';

type TResponse = ICategory[]

const getCategories = createAsyncThunk('categories/getCategories', async (_, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try {
        const {data} = await axios.get<TResponse>('https://e-commerce-59eb9-default-rtdb.firebaseio.com/categories.json');
        
        return data
    } catch (error) {
       if(axios.isAxiosError(error)) {
         return rejectWithValue(error.response?.data.message || error.message);
       } else {
        return rejectWithValue('Unexpected Error');
       }
    }
});

export default getCategories;