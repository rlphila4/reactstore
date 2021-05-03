import { isEmpty } from "lodash";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const imgStyle = {
  width: "128px",
  height: "128px",
  minWidth: "128px",
};

const rowStyle = {
  marginBottom: "10px"
};

const CartProducts = (props) => {

  const getCartProducts = () => {
    if (isEmpty(props.cart)) return <div style={{marginLeft: "-15px"}}><h3>Your Cart is Empty</h3></div>;
    const items = props.cart.map((item) => {
      const product = props.products.find((p) => p.id === item.id);
      return (
        <Row key={`rowCartItem_${item.id}`} style={rowStyle}>
          <Col key={`colCartItem_${item.id}`}>
            <div key={`divCartItem_${item.id}`}>
              <div style={{ float: "left" }}>
                <Image
                  src={`http://localhost:3000/images/product${item.id}.jpg`}
                  thumbnail
                  style={imgStyle}
                />
              </div>
              <div style={{ float: "left", marginLeft: "20px" }}>
                <h5>{product.name}</h5>
                {`(${item.qty}) x $${product.price}`}
              </div>
              {props.delete &&
              <div style={{ float: "right", width: "10px", marginTop: "-5px"}} >
                <button type="button" className="close" onClick={() => props.delete(item.id)} title="Remove from cart">
                  <span style={{ fontSize: "1.4em" }}> × </span>
                </button>
              </div>
              }
            </div>
          </Col>
        </Row>
      );
    });

    return items;
  };

  return <Container>{getCartProducts()}</Container>;
};

export default CartProducts;
