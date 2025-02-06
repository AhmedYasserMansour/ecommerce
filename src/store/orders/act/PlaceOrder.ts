import { RootState } from "@store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { database, push, ref, set } from "@/firebase";

const PlaceOrder = createAsyncThunk('orders/PlaceOrder', async (subtotal: number, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;
  const { auth, cart } = getState() as RootState;

  const orderRef = ref(database, 'orders'); // Ref orders

  // data
  const orderItems = cart.productsInfo.map(e => ({
    id: e.id,
    title: e.title,
    price: e.price,
    img: e.img,
    quantity: cart.items[e.id],  
  }));

  try {
    const newOrderRef = push(orderRef); 

    await set(newOrderRef, {
      userId: auth.user?.userId, // Add a user ID to link the request to the user
      items: orderItems,
      subtotal,
    });
const data = { id: newOrderRef.key, items: orderItems, subtotal };
    return data 

  } catch (error) {
    return rejectWithValue(error)
  }
});

export default PlaceOrder;
