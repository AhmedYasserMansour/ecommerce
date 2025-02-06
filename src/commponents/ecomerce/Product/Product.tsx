import { Button, Modal, Spinner } from "react-bootstrap";
import styles from "./Product.module.css";
import { IProducts } from '@CustomTypes/Shared';
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/Cart/cartSlice";
import { memo, useEffect, useState } from "react";
import Like from '@/assets/svg/like.svg?react';
import LikeFill from '@/assets/svg/like-fill.svg?react';
import { LikeToggle } from "@/store/Wishlist/WishlistSlice";
import ProductInfo from "../ProductInfo/ProductInfo";
const { wishlistBtn} = styles;

const Product = ({id,img, title, price, max, quantity, isLiked, isAuth} : IProducts) => {
  const dispatch = useAppDispatch();
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const availableQuantity = max - (quantity ?? 0);
  const maxQuantity = availableQuantity == 0 ? true : false;
  const [showModal,setShowModal] = useState(false);

  useEffect(()=>{
    if(!isDisabled) {
      return;
    }
    const debounce = setTimeout(()=>{
      setIsDisabled(false)
    },300);
    return ()=> clearTimeout(debounce);
    },[isDisabled]);
    const cartHandler = ()=> {
      setIsDisabled(true);
      dispatch(addToCart(id));
    }
    const likeToggleHandler = ()=> {
      if(isAuth) {
        if(!isLoading) {
          setIsLoading(true);
        dispatch (LikeToggle(id)).unwrap().then(()=>setIsLoading(false))
        .catch(()=> setIsLoading(false));
      }
    } else {
      setShowModal(true);
    }
    }
  return (
    <>
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Login Required</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You need to login first to add this item to your wishlist.
      </Modal.Body>
    </Modal>
    <ProductInfo title={title} price={price} img={img}>
      <div className={wishlistBtn} onClick={likeToggleHandler}>
        {isLoading ? <Spinner animation='border' size="sm" variant="primary"/>:isLiked ? <LikeFill/> : <Like/>}
      </div>
      <p>{availableQuantity == 0 ? `Maximum : ${max}` : `Quantity : ${availableQuantity}`}</p>
      <Button variant="primary" style={{ color: "white", width:'100%' }}
      onClick={cartHandler}
      disabled={isDisabled || maxQuantity}
      >
        {isDisabled? <><Spinner animation="border" size="sm" /> Loading...</>: 'Add to cart'}
      </Button>
    </ProductInfo>
  </>
  );
};

export default memo(Product);