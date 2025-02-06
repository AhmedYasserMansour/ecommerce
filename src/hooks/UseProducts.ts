import { useAppDispatch, useAppSelector } from "@store/hooks"
import getProducts from "@store/products/act/getProducts";
import { useEffect } from "react";
import { productscleanUp } from "@store/products/act/productSlice";
import { useLocation, useParams } from "react-router-dom";
const UseProducts = () => {
    const dispatch = useAppDispatch();
    const {prefix} = useParams();
    const location = useLocation();
    const {products ,loading, error} = useAppSelector(state => state.products);
    const cartItems = useAppSelector(state=>state.cart.items);
    const wishlistId = useAppSelector(state => state.Wishlist.itemsId);
    const user = useAppSelector(state => state.auth.user)
    const fullInfo = products.map(e => (
      {...e, quantity: cartItems[e.id] || 0, 
      isLiked : wishlistId.includes(e.id),
      isAuth : user ? true : false
    }
    ));
    
    useEffect(()=> {
      if (location.pathname === '/') {
        dispatch(getProducts('all')); // All Products
      } else {
        dispatch(getProducts(prefix as string)); // products with Prefix
      }
      return ()=> {
        dispatch(productscleanUp())
      }
    },[dispatch, prefix, location.pathname]);
  return (
   {prefix, fullInfo, loading, error}
  )
}

export default UseProducts
