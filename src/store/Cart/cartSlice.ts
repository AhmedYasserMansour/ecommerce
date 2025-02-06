import { createSlice } from "@reduxjs/toolkit";
import GetItems from "@pages/Cart/act/GetItems";
import { TLoading , IProducts} from "@CustomTypes/Shared";
interface ICartState {
    items : {[key:string]: number},
    productsInfo : IProducts[],
    loading : TLoading,
    error : string | null;
}

const initialState : ICartState = {
    items : {},
    productsInfo : [],
    loading: 'idle',
    error : null,
}
const cartSlice  = createSlice({
    name : "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
           const id = action.payload;
           if(state.items[id]) {
            state.items[id]++;
           }else {
            state.items[id] = 1;
           }
        },
        cartItemChangeQauntity: (state,action) =>{
            state.items[action.payload.id] = action.payload.quantity;
        },
        cartItemRemove: (state, action)=> {
            state.productsInfo = state.productsInfo.filter(product => product.id !== action.payload);
            if(!state.productsInfo.length) {
                state.items = {};
            } else {
                delete state.items[action.payload];
            }
        },
        cartCleanUp : (state)=> {state.productsInfo = []},
        cleanUpPlaceOrder: (state)=> {
            state.items = {};
            state.productsInfo = [];
        }
    },
    extraReducers: (builder)=> {
        builder.addCase(GetItems.pending, (state) => {
            state.loading = 'pending';
            state.error = null;
        })  
        builder.addCase(GetItems.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.productsInfo = action.payload;
            state.error = null;
        })  
        builder.addCase(GetItems.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.payload as string;
        })  
     },
});
export {GetItems}
export const {addToCart, cartItemChangeQauntity, 
    cartItemRemove, cartCleanUp, cleanUpPlaceOrder} = cartSlice.actions;
export default cartSlice.reducer;