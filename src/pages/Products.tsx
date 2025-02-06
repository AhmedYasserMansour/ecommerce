import { Container } from "react-bootstrap";
import {Product} from '@commponents/ecomerce/index';
import { Loading } from "@commponents/feedback/Loading";
import { GridList } from '@commponents/common';
import Heading from "@commponents/common/Heading/Heading";
import UseProducts from '@hooks/UseProducts';

const Products = () => {
const {prefix, fullInfo, loading, error} = UseProducts();
  return (
    <Container className="p-3">
      <Heading title={`${prefix?.toUpperCase()} Products`}></Heading>
   <Loading status={loading} error={error} type="products">
  <GridList message="There are no products" records={fullInfo} item={(p)=> <Product {...p}/>}/>
   </Loading>
  </Container>
  )
};

export default Products;
