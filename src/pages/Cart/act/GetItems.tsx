import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import { ref, get, database } from '@/firebase';

const GetItems = createAsyncThunk(
  'cart/GetItems',
  async (_, thunkAPI) => {
    const { rejectWithValue,getState } = thunkAPI;
    const { cart } = getState() as RootState;
    const itemsId = Object.keys(cart.items);
    try {
      const productPromises = itemsId.map(async id=> {
        const adjustedId = Number(id) - 1; 
        const productRef = ref(database, `products/${adjustedId}`);
        const snapshot = await get(productRef);
          if (snapshot.exists()) {
              return snapshot.val();
          } else {
              return null;
          }
      });
      // Promise.all
      const products = await Promise.all(productPromises);
      const validProducts = products.filter((product) => product !== null); // filter Products
      return validProducts;
    } catch {
      return rejectWithValue('404 Not Found');
    }
  }
);

export default GetItems;

