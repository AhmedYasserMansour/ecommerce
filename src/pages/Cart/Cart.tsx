import LottieHandler from "@/commponents/feedback/lottieHandler/lottieHandler"
import { CartItemList, TotalThecartPrice } from "@commponents/ecomerce"
import { Loading } from "@commponents/feedback/Loading"
import UseCart from "@hooks/UseCart"
import { Container } from "react-bootstrap"

const Cart = () => {
   const { products, userId,loading, error,changeQuantityHandler,removItemHandler, placeOrderStatus}  = UseCart();
  return (
    <Container className={`pt-5 ${products.length <= 2 && 'global'}`}>
      <Loading status={loading} error={error} type='cart'>
      {products.length ?( <>
      <CartItemList products={products} changeQuantityHandler={changeQuantityHandler}
      removItemHandler={removItemHandler}/>
      <TotalThecartPrice products={products} userId={userId}/></>):
       placeOrderStatus === 'succeeded' ? ( <LottieHandler
        message="Your order has been placed successfully"
        type="success"
      />
    ) : (<LottieHandler type="empty" message='Your Cart is emty'/>)}
      </Loading>
    </Container>
  )
}

export default Cart;
