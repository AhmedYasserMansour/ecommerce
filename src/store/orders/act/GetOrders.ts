import { database, ref, get, query, orderByChild, equalTo } from "@/firebase";
import { RootState } from "@/store/store";
import { IOrder } from "@/types/Shared";
import { createAsyncThunk } from "@reduxjs/toolkit";

type TResponse = IOrder[]

const GetOrders = createAsyncThunk('orders/GetOrders', async(_, thunkAPI)=> {
    const {rejectWithValue, getState} = thunkAPI;
    const {auth} = getState() as RootState;
    if (!auth.user?.userId) {
        return rejectWithValue("User ID is missing");
    }
    const ordersRef = ref(database, 'orders');
    const userOrdersQuery = query(ordersRef, orderByChild('userId'), equalTo(auth.user?.userId));
    try {
        const snapshot = await get(userOrdersQuery);
        const ordersObject = snapshot.val();  // Object
        const ordersArray = ordersObject ? Object.values(ordersObject) as TResponse : []; // Array
        return ordersArray;
    } catch (error) {
        return rejectWithValue(error)
    }
});

export default GetOrders;