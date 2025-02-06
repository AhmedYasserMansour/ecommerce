import { useAppDispatch, useAppSelector } from "@store/hooks";
import GetWishlist from "@store/Wishlist/act/GetWishlist";
import { wishlistCleanUp } from "@/store/Wishlist/WishlistSlice";
import { useEffect } from "react";

const UseWishlist = () => {
    const dispatch = useAppDispatch();
    const totalQuantityWishlist = useAppSelector(state => state.Wishlist.itemsId.length);
    const {productsInfo ,loading, error} = useAppSelector(state => state.Wishlist);
      const cartItems = useAppSelector(state=>state.cart.items);
      const fullInfo = productsInfo.map(e => (
        {...e, quantity: cartItems[e.id] || 0, 
        isLiked : true,
        isAuth : true
      }
      ));
    useEffect(()=> {
            dispatch(GetWishlist('productsInfo'));
      return () => {dispatch(wishlistCleanUp())};
    },[dispatch])
  return ({fullInfo, loading, error, totalQuantityWishlist})
}

export default UseWishlist;
