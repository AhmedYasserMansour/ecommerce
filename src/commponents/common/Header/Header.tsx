import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import HeaderIcons from './HeaderIcons/HeaderIcons';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { authLogout } from '@/store/auth/act/AuthSlice';
import { useEffect } from 'react';
import GetWishlist from '@/store/Wishlist/act/GetWishlist';
import User from '@/assets/svg/user.svg?react';
const {us, header} = styles;


const Header = () => {
  const {user} = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  useEffect(()=> {
    dispatch(GetWishlist('productIds'));
},[dispatch, user])
  return (
    <header>
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
       <Container fluid>
    <Link to='/'>
    <div className={header}>
     <h4>Fashion</h4>
     <span>Store</span>
    </div> 
    </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="products/men">
            Men's Fashion
            </Nav.Link>
            <Nav.Link as={NavLink} to="products/women">
            Women's Fashion
            </Nav.Link>
            <Nav.Link as={NavLink} to="products/kids">
            Kids' Fashion
            </Nav.Link>
            <Nav.Link as={NavLink} to="products/baby">
            Babys' Fashion
            </Nav.Link>
            <Nav.Link as={NavLink} to="products/sport">
            Sports' Fashion
            </Nav.Link>
          </Nav>
          <Nav className={us}>
           {!user? <><NavDropdown title={<><span>Log in </span><User /></>} id="basic-nav-dropdown">
        <NavDropdown.Item as={NavLink} to='login'>Login</NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to='register'>Register</NavDropdown.Item>
      </NavDropdown>
            </>:<NavDropdown title={user.name} id="basic-nav-dropdown">
        <NavDropdown.Item as={NavLink} to='profile' end>Profile</NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to='profile/orders'>Orders</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={NavLink} to='/' onClick={()=> dispatch(authLogout())}>Log Out</NavDropdown.Item>
      </NavDropdown>}
          </Nav>
        <HeaderIcons />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  )
}

export default Header;

