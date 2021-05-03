import { isEmpty } from "lodash";
import React, { useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CartProducts from "../comps/CartProducts";
import Shared from "../shared/shared";
import * as storeActions from "../redux/storeReducer";

const Checkout = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  const cart = useSelector((store) => store.cart);
  const [show, setShow] = useState(false);

  const handlePurchase = () => {
    dispatch(storeActions.completeCheckout());
    setShow(true);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xs={8}>
            <h1>Checkout</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={8}>
            {show ? (
              <Alert variant="success">
                <h4>Thank you for your purchase.</h4>
              </Alert>
            ) : (
              <CartProducts cart={cart} products={products} />
            )}
          </Col>
        </Row>
        {!isEmpty(cart) && (
          <Row style={{ marginTop: "30px" }}>
            <Col xs={8}>
              <h3>{`Total: $${Shared.getCartTotal(products, cart)}`}</h3>
            </Col>
          </Row>
        )}
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <Button
              variant="success"
              onClick={handlePurchase}
              disabled={isEmpty(cart)}
            >
              Purchase
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
