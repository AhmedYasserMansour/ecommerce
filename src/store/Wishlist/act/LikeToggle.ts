import { createAsyncThunk } from "@reduxjs/toolkit";
import {database ,get, push, ref, remove } from "@/firebase";
import { RootState } from "@store/store";

export const LikeToggle = createAsyncThunk('wishlist/LikeToggle', async (id: number, thunkAPI) => {

  const {rejectWithValue,getState} = thunkAPI;
  const {auth} = getState() as RootState;
  const userId = auth.user?.userId
  
    const productRef = ref(database, 'wishList'); 
  
    try {
      const snapshot = await get(productRef);  
      const wishList = snapshot.exists() ? snapshot.val() : {};  
      let productExists = false; 

      for (const key in wishList) {
        if (wishList.hasOwnProperty(key)) {
          const item = wishList[key];
          if (item.productId === id) {
            productExists = true;  // المنتج موجود
            const itemRef = ref(database, `wishList/${key}`); 
            await remove(itemRef);  
            return {type : 'remove', id} 
          }
        }
      }
      if (!productExists) {
        const itemRef = ref(database, 'wishList');
        await push(itemRef, { userId: userId, productId: id });  // add new product
        return {type: 'add', id}
      }
  
    } catch (error){
      return rejectWithValue('Unexpected Error');
    }
  });
  
  
