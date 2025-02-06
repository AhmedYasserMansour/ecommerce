import { IProducts } from '@CustomTypes/Shared';
import CartItem from "../CartItem/CartItem";

type TCartItemList = {
    products: IProducts[];
    changeQuantityHandler: (id:number, quantity: number)=> void;
    removItemHandler : (id: number)=> void;
}
const CartItemList = ({products,changeQuantityHandler, removItemHandler} : TCartItemList) => {
    const renderList = products.map((product) => (
      <CartItem key={product.id} {...product}
      changeQuantityHandler={changeQuantityHandler}
      removItemHandler={removItemHandler} />
    ));
  return (
    <>{renderList}</>
  )
}

export default CartItemList;
