import { createSlice } from "@reduxjs/toolkit";
import { TLoading, IOrder } from '@CustomTypes/Shared';
import PlaceOrder from "./act/PlaceOrder";
import GetOrders from "./act/GetOrders";

interface IOrdersSlice {
    orderList: IOrder[],
    loading: TLoading,
    error: string | null,
}

const initialState : IOrdersSlice= {
    orderList: [],
    loading: 'idle',
    error: null,
}
const OrdersSlice = createSlice({
    name : 'orders',
    initialState,
    reducers: {
        resetOrder : (state) => {
            state.loading = 'idle';
            state.error = null;
        }
    },
    extraReducers:(builder)=> {
    builder.addCase(PlaceOrder.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
    });
    builder.addCase(PlaceOrder.fulfilled, (state) => {
        state.loading ='succeeded';
    });
    builder.addCase(PlaceOrder.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload as string;
    });
    builder.addCase(GetOrders.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
    });
    builder.addCase(GetOrders.fulfilled, (state, action) => {
        state.loading ='succeeded';
        state.orderList = action.payload;
    });
    builder.addCase(GetOrders.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload as string;
    });
    },
});

export const {resetOrder} = OrdersSlice.actions
export default OrdersSlice.reducer;