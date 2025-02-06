import { useAppDispatch, useAppSelector } from "@store/hooks"
import { useCallback, useEffect } from "react"
import {GetItems} from "@store/Cart/cartSlice"
import { cartCleanUp, cartItemChangeQauntity, cartItemRemove } from "@store/Cart/cartSlice"
import { resetOrder } from "@/store/orders/OrdersSlice"

const UseCart = () => {
    const dispatch = useAppDispatch();
    useEffect(()=> {
        dispatch(GetItems())
        return ()=> {dispatch(cartCleanUp())
          dispatch(resetOrder()) 
        }
    },[dispatch]);
    const userId = useAppSelector(state=> state.auth.user?.userId)
    const placeOrderStatus = useAppSelector(state=> state.orders.loading);
    const {items, productsInfo,loading, error} = useAppSelector(state=> state.cart);
    const products = productsInfo.map(e => ({...e, quantity : items[e.id]}));
    const changeQuantityHandler = useCallback((id: number, quantity: number)=> {
      dispatch(cartItemChangeQauntity({id, quantity}))
    },[dispatch]);
    const removItemHandler = useCallback((id: number) => {
      dispatch(cartItemRemove(id));
      },[dispatch]);
  return (
    { products,loading, error, userId, placeOrderStatus, changeQuantityHandler,removItemHandler} 
  )
}

export default UseCart
