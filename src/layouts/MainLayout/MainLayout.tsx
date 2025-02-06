import {Header, Footer} from "@commponents/common";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return ( <>
        <Header/>
        <Container fluid style={{marginTop: '50px', padding: '0'}}><Outlet/></Container>
        <Footer/>
        </> );
}
 
export default MainLayout;

