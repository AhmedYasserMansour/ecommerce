import { IProducts } from '@CustomTypes/Shared';
import styles from './TotalThecartPrice.module.css';
import { Button, Modal, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import PlaceOrder from '@/store/orders/act/PlaceOrder';
import { useAppDispatch } from '@/store/hooks';
import { cleanUpPlaceOrder } from '@/store/Cart/cartSlice';
type TTotalThecartPrice = {
  products: IProducts[],
  userId: string | undefined
}; 
const TotalThecartPrice = ({ products, userId }:TTotalThecartPrice ) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const subtotal = products.reduce((acc, current) => {
    const price = current.price;
    const quantity = current.quantity;
    if(quantity && typeof quantity === 'number') {
      return acc + price * quantity;
    } else {
      return acc
    };
  },0); 
  const modalHandler = () => {
    setShowModal(!showModal);
    setError(null);
  };

  const placeOrderHandler = () => {
    setLoading(true);
    dispatch(PlaceOrder(subtotal))
      .unwrap()
      .then(() => {
        dispatch(cleanUpPlaceOrder());
        setShowModal(false);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };
  return (
    <>
          <Modal show={showModal} onHide={modalHandler} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Placing Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to place order with Subtotal:{" "}
          {subtotal.toFixed(2)} EGP
          {!loading && error && (
            <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalHandler}>
            Close
          </Button>
          <Button
            variant="info"
            style={{ color: "white" }}
            onClick={placeOrderHandler}
          >
            {loading ? (
              <>
                <Spinner animation="border" size="sm"></Spinner> Loading...
              </>
            ) : (
              "Confirm"
            )}
          </Button>
        </Modal.Footer>
      </Modal>

    <div className={styles.container}>
      <span>SubTotal:</span>
      <span>{subtotal.toFixed(2)}</span>
    </div>
   {userId && (
      <Button className={styles.btn} onClick={modalHandler}>Place Order</Button>
   )}
    </>
  )
}

export default TotalThecartPrice;
