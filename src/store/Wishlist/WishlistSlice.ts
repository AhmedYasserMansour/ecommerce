import { createSlice } from "@reduxjs/toolkit";
import { LikeToggle } from "./act/LikeToggle";
import GetWishlist from "./act/GetWishlist";
import { TLoading } from "@CustomTypes/Shared";
import { IProducts } from '@CustomTypes/Shared';
import { authLogout } from "../auth/act/AuthSlice";
interface IWishlistSlice {
    itemsId : number[],
    error: null | string,
    loading : TLoading,
    productsInfo : IProducts[],
}

const initialState: IWishlistSlice = {
    itemsId : [],
    error: null,
    loading : 'idle',
    productsInfo : [],
 };

const WishlistSlice = createSlice({
    name:'Wishlist',
    initialState,
    reducers : {
       wishlistCleanUp : (state)=> {
            state.productsInfo = [];
        }
    },
    extraReducers : (builder)=> {
        builder.addCase(LikeToggle.pending, (state)=> {
            state.error = null;
        });
        builder.addCase(LikeToggle.fulfilled, (state,action)=> {
            if (action.payload) {
                if (action.payload.type === 'add') {
                  state.itemsId.push(action.payload.id); 
                } else {
                  state.itemsId = state.itemsId.filter((e) => e !== (action.payload as { id: number }).id);
                  state.productsInfo = state.productsInfo.filter((e) => e.id!== (action.payload as { id: number }).id); 
                }
                }
        });
        builder.addCase(LikeToggle.rejected, (state,action)=> {
            state.error = action.payload as string;
        });
        builder.addCase(GetWishlist.pending, (state)=> {
            state.error = null;
        });
        builder.addCase(GetWishlist.fulfilled, (state,action)=> {
            state.loading = 'succeeded';
            if(action.payload.dataType === 'productsInfo') {
                state.productsInfo = action.payload.data
            }else if (action.payload.dataType === 'productIds') {
                state.itemsId = action.payload.data; 
            }
        });
        builder.addCase(GetWishlist.rejected, (state,action)=> {
            state.loading = 'failed';
            state.error = action.payload as string;
        });
        builder.addCase(authLogout, (state)=> {
            state.itemsId = [];
            state.productsInfo = [];
        });
    }
});

export {LikeToggle}
export const {wishlistCleanUp} = WishlistSlice.actions
export default WishlistSlice.reducer;