import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as storeActions from "../redux/storeReducer";
import Cart from "../pages/Cart";

const navLinkStyle = {
  marginLeft: "30px",
};

const Navigation = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  const showCart = useSelector((store) => store.showCart);

  const handleModal = () => dispatch(storeActions.showCart(true));

  const links = products.map((item) => {
    //console.log(item);
    return (
      <Nav.Link key={`nav-link-${item.id}`} as={Link} to={`/Products/${item.id}`} style={navLinkStyle} >
        {item.name}
      </Nav.Link>
    );
  });

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand as={Link} to="/">
                <h2>React Store</h2>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">{links}</Nav>
                <Nav></Nav>
                <Navbar.Collapse className="justify-content-end">
                  <Nav.Link onClick={() => {  handleModal();  }}  >
                    View Cart
                  </Nav.Link>
                </Navbar.Collapse>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
        {showCart && <Cart />}
      </Container>
      <br />
      <br />
    </>
  );
};

export default Navigation;
