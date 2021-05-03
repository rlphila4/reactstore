import { makeActionCreator } from "./makeActionCreator";
import * as actionTypes from "../ActionTypes/storeActionTypes";
import { cloneDeep } from "lodash";
import data from '../jsons/data'

const initialState = {
  cart: [],
  products: cloneDeep(data),
  showCart: false,
  showCheckout: false
};

const reducer = (state = initialState, action = null) => {
  switch (action.type) {
    case actionTypes.SHOW_CART_MODAL:
      return { ...state, showCart: action.payload.flag };
    case actionTypes.ADD_PRODUCT_TO_CART:
      const newCart = cloneDeep(state.cart);
      let product = newCart.find((p) => p.id === action.payload.product.id);
      if (product) {product.qty += action.payload.product.qty;}
      if (!product){
        product = { id: action.payload.product.id, qty: action.payload.product.qty };
        newCart.push(product);
      }
      return { ...state, cart: newCart, showCart: true };
    case actionTypes.REMOVE_PRODUCT_FROM_CART:
      const filteredCart = cloneDeep(
        state.cart.filter((i) => i.id !== action.payload.id)
      );
      return { ...state, cart: filteredCart };
    case actionTypes.COMPLETE_CHECKOUT:
      return initialState;
    default:
      return state;
  }
};

export const addProduct = makeActionCreator( actionTypes.ADD_PRODUCT_TO_CART,  "product" );
export const removeProduct = makeActionCreator( actionTypes.REMOVE_PRODUCT_FROM_CART, "id");
export const completeCheckout = makeActionCreator(actionTypes.COMPLETE_CHECKOUT);
export const showCart = makeActionCreator(actionTypes.SHOW_CART_MODAL, "flag");

export default reducer;
