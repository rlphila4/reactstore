import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as storeActions from "../redux/storeReducer";
import { useHistory } from "react-router-dom";
import CartProducts from "../comps/CartProducts";
import { isEmpty } from "lodash";
import Shared from "../shared/shared";

const modalStyle = {
  top: "-25px",
  left: "70%",
 
  width: "30%",
  minWidth: "20%",

 
};


const Cart = () => {
  const dispatch = useDispatch();
  const show = useSelector((store) => store.showCart);
  const products = useSelector((store) => store.products);
  const cart = useSelector((store) => store.cart);
  const handleClose = () => dispatch(storeActions.showCart(false));
  const history = useHistory();

  const handleCheckout = () => {
    history.push(`/checkout`);
    handleClose();
  };

  const removeProduct = (id) => dispatch(storeActions.removeProduct(id));

  return (
    <Modal style={modalStyle}
      // animation={false}
      show={show}
      onHide={handleClose}
      autoFocus={true}
    >
      {/* <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <Row style={{ marginBottom: "20px" }}>
          <Col>
            <h2>Cart</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <CartProducts
              cart={cart}
              products={products}
              delete={removeProduct}
            />
          </Col>
        </Row>
        {!isEmpty(cart) && (
          <Row style={{ marginTop: "30px" }}>
            <Col>
              <h3>{`Subtotal: $${Shared.getCartTotal(products, cart)}`}</h3>
            </Col>
          </Row>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={handleCheckout}
          disabled={isEmpty(cart)}
        >
          Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
