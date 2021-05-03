import { createStore, compose } from "redux";
import productReducer from "./storeReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(productReducer, composeEnhancers());

export default store;
