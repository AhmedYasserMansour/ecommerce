import { Container } from "react-bootstrap";
import {Product} from '@commponents/ecomerce/index';
import { Loading } from "@commponents/feedback/Loading";
import { GridList } from '@commponents/common';
import UseProducts from '@hooks/UseProducts';
import Categories from "./Categories";
import SliderPage from "@/commponents/Slider/SliderPage";
import Heading from "@/commponents/common/Heading/Heading";

const Home = () => {
  const { fullInfo, loading, error} = UseProducts();
  return (<>
  <SliderPage/>
    <Container fluid className="pt-3">
    <Heading title="Categories"/>
  <Categories/>
  <Heading title="Latest Products"/>
   <Loading status={loading} error={error} type='products'>
  <GridList message="There are no products" records={fullInfo} item={(p)=> <Product key={p.id} {...p}/>}/>
   </Loading>
  </Container>
  </>
  );
}

export default Home;
