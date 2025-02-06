import  Heading  from '@/commponents/common/Heading/Heading';
import { Loading } from "@/commponents/feedback/Loading";
import { Container, Modal, Table } from "react-bootstrap";
import ProductInfo from "@/commponents/ecomerce/ProductInfo/ProductInfo";
import UseOrders from '@/hooks/UseOrders';

const Orders = () => {
    const { orderList, loading, error, closeModalHandler,
         viewDetailsHandler, showModal, selectedProduct } = UseOrders();
  return (
   <>
     <Modal show={showModal} onHide={closeModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Products Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct.map((el) => (
            <ProductInfo
              key={el.id}
              title={el.title}
              img={el.img}
              price={el.price}
              quantity={el.quantity}
              direction="column"
              style={{ marginBottom: "10px" }}
            />
          ))}
        </Modal.Body>
      </Modal>
      <Container className='global pt-5'>
   <Heading title="My Order" />
      <Loading status={loading} error={error} type='table'>
        <Table>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Items</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((el,index) => (
              <tr key={index}>
                <td>#{index + 1}</td>
                <td>
                  {el.items.length} {el.items.length > 1 ? 'Items' : 'Item'}
                  {" / "}
                  <span
                 onClick={() => viewDetailsHandler(el.subtotal)}
                    style={{ textDecoration: "underline", cursor: "pointer", color: 'blue'}}
                  >
                    Product Details
                  </span>
                </td>
                <td>{el.subtotal.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Loading>
        </Container>
   </>
  )
}

export default Orders;
