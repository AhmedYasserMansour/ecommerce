import styles from './CartItem.module.css';
import { Button, Form } from 'react-bootstrap';
import { memo } from 'react';
import { IProducts } from '@CustomTypes/Shared';
import ProductInfo from '../ProductInfo/ProductInfo';
const { cartItem, cartItemSelection, remove } = styles;
  
type TCartItem = IProducts &  {
  changeQuantityHandler: (id:number, quantity: number)=> void
  removItemHandler: (id: number)=> void
};

  const CartItem = ({id,title, img, price, max, quantity,changeQuantityHandler,removItemHandler}: TCartItem)=> {
    const renderOptions = Array(max).fill(0).map((_,index)=> {
      const quantity = ++index
      return (
        <option key={index}>{quantity}</option>
      )
    });
    const changeQuantity = (e: React.ChangeEvent<HTMLSelectElement>)=> {
      const quantity = e.target.value;
      changeQuantityHandler(id, parseInt(quantity));
    }
      return (
        <div className={cartItem}>
       <ProductInfo title={title} price={price} img={img} direction='column'>
              <Button
              onClick={()=> removItemHandler(id)}
                variant="secondary"
                className={remove}>Remove</Button>
           </ProductInfo>
  
          <div className={cartItemSelection}>
            <span className="d-block mb-1">Quantity</span>
            <Form.Select value={quantity} onChange={changeQuantity}>
            {renderOptions}
            </Form.Select>
          </div>
        </div>
      )};
  
  export default memo(CartItem);
