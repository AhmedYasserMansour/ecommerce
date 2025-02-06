import { createAsyncThunk } from "@reduxjs/toolkit";
import { database, ref, query, orderByChild, equalTo, get } from '@/firebase';

const getProducts = createAsyncThunk('products/getproducts', async (prefix: string, thunkAPI)=>{
  const {rejectWithValue} = thunkAPI;
  try {
    const productsRef = ref(database, 'products'); 
    let q;
    if (prefix === 'all') { // all Products
      q = query(productsRef);
    } else { // product by prefix
      q = query(productsRef, orderByChild('cat_prefix'), equalTo(prefix));
    }
    const snapshot = await get(q); 
    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.values(data); 
    } else {
      return [];
    }
  } catch {
    return rejectWithValue('404 Not Found');
  }
});

export default getProducts;
