import { combineReducers, configureStore } from '@reduxjs/toolkit'
import categories from './categories/act/CategoriesSlice';
import products from './products/act/productSlice';
import cart from './Cart/cartSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import { FLUSH, PAUSE, PERSIST, PURGE, } from 'redux-persist';
import Wishlist from './Wishlist/WishlistSlice';
import auth from './auth/act/AuthSlice'
import orders from './orders/OrdersSlice';
const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "auth"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whiteList: ["user"],
};

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  categories,
  products,
  orders,
  cart: persistReducer(cartPersistConfig, cart),
  Wishlist: Wishlist,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:{ignoredActions :[FLUSH,PAUSE,PERSIST,PURGE]}
    }),
});

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export {store, persistor};