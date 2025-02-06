import LottieHandler from "@/commponents/feedback/lottieHandler/lottieHandler";
import { GridList } from "@commponents/common";
import { Product } from "@commponents/ecomerce";
import { Loading } from "@commponents/feedback/Loading";
import UseWishlist from '@hooks/UseWishlist';
import { Container } from "react-bootstrap";

const Wishlist = () => {
  const {fullInfo , loading, error, totalQuantityWishlist} = UseWishlist();
  
  return (
    <Container className={fullInfo.length <= 6 ? 'global' : ''}>
   {fullInfo.length ? <>
    <Loading status={loading} error={error}>
    <GridList records={fullInfo} item={(p)=> <Product {...p}/>}/>
  </Loading> </>
    : <LottieHandler type="favorite" message={totalQuantityWishlist >= 0 ?
     "" : "Your wishlist is empty" }/>}
  </Container>
  )
}

export default Wishlist;
