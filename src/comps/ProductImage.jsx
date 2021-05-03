import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const imgStyle = {
  width: "30%",
  height: "30%",
  minWidth: "350px",
  minHeight: "350px",
};

const colStyle = {
  marginBottom: "30px"
}

const ProductImage = (props) => {

  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={4} xl={4} style={colStyle}>
          <Image
            src={`http://localhost:3000/images/product${props.product.id}.jpg`}
            thumbnail
            style={imgStyle}
          />
        </Col>
        <Col sm={12} md={12} lg={10} xl={8} style={colStyle}>
          {props.product.text}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductImage;
