import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get } from 'firebase/database';
import { database } from '@/firebase';
import { RootState } from "@store/store";

type WishListItem = {
  productId: number;
  userId: string;
};
type TDataType = 'productsInfo' | 'productIds';

const GetWishlist = createAsyncThunk('wishlist/GetWishlist', async (dataType: TDataType, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;
  
  // الحصول على userId من الـ auth
  const {auth} = getState() as RootState;
  const userId = auth.user?.userId;

  // استرجاع البيانات من الـ wishList
  const wishListRef = ref(database, 'wishList');
  
  try {
    const snapshot = await get(wishListRef);
    
    if (!snapshot.exists()) {
        return { userWishList: [], productsInfo: [] }; // Return empty data if no data exists
      }

    const wishListData: Record<string, WishListItem> = snapshot.val();

    const userWishList = Object.values(wishListData).filter(item => item.userId === userId);
    
    const productIds = userWishList.map(item => item.productId - 1);
   
    if (!productIds.length) {
        return { data: [], dataType: 'emty' };
      }
    if(dataType === 'productIds') {
        const productPromises = userWishList.map(item => item.productId);
        return { data: productPromises, dataType : 'productIds' };
    } else {
        const productPromises = productIds.map(async (productId) => {
          const productRef = ref(database, `products/${productId}`);
          const productSnapshot = await get(productRef);
          return productSnapshot.exists() ? productSnapshot.val() : null;
        });
    
        const products = await Promise.all(productPromises);
        
        const validProducts = products.filter(product => product !== null);
    
        return { data: validProducts, dataType: 'productsInfo' };

    }
    
  } catch (error) {
    return rejectWithValue(error);
  }
});

export default GetWishlist;
