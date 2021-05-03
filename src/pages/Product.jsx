import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import ProductImage from "../comps/ProductImage";
import AddProduct from "../comps/AddProduct";

const Product = () => {
  const location = useLocation();
  const history = useHistory();
  const id = location.pathname.split("/")[2];
  const product = useSelector((store) =>
    store.products.find((p) => p.id === parseInt(id))
  );

  if(!product){ history.push(`/notfound`); return false}

  return (
    <div>
      <Container>
        <Row>
          <Col xs={8}>
            <h1>{product.name}</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12}>
            <ProductImage product={product} />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <AddProduct product={product} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
