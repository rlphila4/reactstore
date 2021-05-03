import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as storeActions from '../redux/storeReducer'

const btnStyle = {
  width: "35px",
  height: "40px",
  marginBottom: "20px",
  marginTop: "10px"
};

const textStyle = {
  width: "50px",
  marginTop: "2px",
  textAlign: "center",
  height: "33px",
  border: "none",
  borderColor: "none",
  fontWeight: "bold"
};

const AddProduct = (props) => {
  const [qty, setQty] = useState(0);

  const dispatch = useDispatch();
  const addToCart =() => {
   if(qty) dispatch(storeActions.addProduct({id: props.product.id, qty: qty}));
  }

  useEffect(() => {
     setQty(0)
  }, [props.product.id])

  return (
    <div>
      <h3>${props.product.price}</h3>
      <br/>
      <h5>Quantity</h5>
      <button
        onClick={() => setQty(parseInt(qty) - 1 < 0 ? 0 : parseInt(qty) - 1)}
        style={btnStyle}
      >
        -
      </button>
      <input
        type="text"
        value={qty}
        onChange={(e) =>
          setQty(
            (!e.target.value || isNaN(e.target.value)) ? 0 : e.target.value
          )
        }
        style={textStyle}
      />
      <button onClick={() => setQty(parseInt(qty) + 1)} style={btnStyle}>
        +
      </button>
      <div>
        <Button variant="primary" style={{width: "120px"}} onClick={addToCart} disabled={!qty}>Add to Cart</Button>{' '}
      </div>
    </div>
  );
};

export default AddProduct;
