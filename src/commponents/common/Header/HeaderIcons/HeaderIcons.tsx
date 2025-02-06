import { Counter } from '@commponents/ecomerce';
import { getTotalQuantity } from '@store/Cart/Selectors/Selectors';
import { useAppSelector } from '@store/hooks';
import LogoCart from '@/assets/svg/cart.svg?react';
import LogoWishlist from '@/assets/svg/wishlist.svg?react';
import { useLocation } from 'react-router-dom';
const HeaderIcons = () => {
    const totalQuantityBasket = useAppSelector(getTotalQuantity); // state=> getTotalQuantity(state)
    const totalQuantityWishlist = useAppSelector(state => state.Wishlist.itemsId.length);
    const location = useLocation(); 
    const isCartActive = location.pathname === '/cart';
    const isWishlistActive = location.pathname === '/wishlist';
  return (
    <div className='d-flex'>
       <Counter to="cart" title='Cart' svgIcon={<LogoCart title='Cart'/>}
        totalQuantity={totalQuantityBasket}
        isActive={isCartActive}/>
       <Counter to="wishlist" title='Wishlist' svgIcon={<LogoWishlist title='Wishlist'/>}
        totalQuantity={totalQuantityWishlist}
        isActive={isWishlistActive}/>
    </div>
  )
}

export default HeaderIcons
